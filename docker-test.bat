@echo off
echo ========================================
echo  Docker Container Test Suite
echo  Rawlings Global Solutions
echo ========================================
echo.

REM Check if Docker is running
docker ps >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Docker is not running!
    echo Please start Docker Desktop and try again.
    pause
    exit /b 1
)

echo Choose test mode:
echo [1] Test Development Build
echo [2] Test Production Build
echo [3] Test Both (recommended)
echo.
set /p mode="Enter 1, 2, or 3: "

if "%mode%"=="1" goto test_dev
if "%mode%"=="2" goto test_prod
if "%mode%"=="3" goto test_both
echo Invalid option. Exiting.
pause
exit /b 1

:test_dev
echo.
echo ========================================
echo  Testing Development Build
echo ========================================
echo.
call :run_dev_test
goto end

:test_prod
echo.
echo ========================================
echo  Testing Production Build
echo ========================================
echo.
call :run_prod_test
goto end

:test_both
echo.
echo ========================================
echo  Testing Both Builds
echo ========================================
echo.
call :run_dev_test
echo.
echo Press any key to continue to production test...
pause >nul
echo.
call :run_prod_test
goto end

:run_dev_test
echo.
echo [STEP 1/5] Building development image...
docker-compose build dev
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Development build failed
    goto :eof
)
echo [PASS] Development image built successfully
echo.

echo [STEP 2/5] Starting development container...
start /min docker-compose up dev
echo Waiting 30 seconds for container to start...
timeout /t 30 /nobreak >nul
echo.

echo [STEP 3/5] Checking if container is running...
docker ps | findstr "rgs-webapp-dev" >nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Development container is not running
    docker-compose logs dev
    goto :eof
)
echo [PASS] Development container is running
echo.

echo [STEP 4/5] Testing HTTP endpoint...
curl -s -o nul -w "%%{http_code}" http://localhost:3000 | findstr "200" >nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] HTTP endpoint not responding
    echo Checking logs:
    docker-compose logs --tail 20 dev
) else (
    echo [PASS] HTTP endpoint responding (200 OK)
    echo.
    echo [SUCCESS] Development container is working!
    echo.
    echo You can now:
    echo - Open http://localhost:3000 in your browser
    echo - Edit files and see hot reload in action
    echo - View logs: docker-compose logs -f dev
    echo.
    echo Press any key to stop the container...
    pause >nul
)

echo [STEP 5/5] Stopping development container...
docker-compose down
echo [DONE] Development test complete
echo.
goto :eof

:run_prod_test
echo.
echo [STEP 1/5] Building production image...
echo This may take 3-5 minutes...
docker-compose build prod
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Production build failed
    echo Check the logs above for errors
    goto :eof
)
echo [PASS] Production image built successfully
echo.

echo [STEP 2/5] Starting production container...
start /min docker-compose up prod
echo Waiting 30 seconds for container to start...
timeout /t 30 /nobreak >nul
echo.

echo [STEP 3/5] Checking if container is running...
docker ps | findstr "rgs-webapp-prod" >nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Production container is not running
    docker-compose logs prod
    goto :eof
)
echo [PASS] Production container is running
echo.

echo [STEP 4/5] Testing HTTP endpoint...
curl -s -o nul -w "%%{http_code}" http://localhost:3000 | findstr "200" >nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] HTTP endpoint not responding
    echo Checking logs:
    docker-compose logs --tail 20 prod
) else (
    echo [PASS] HTTP endpoint responding (200 OK)
    echo.
    echo [SUCCESS] Production container is working!
    echo.
    echo Image size:
    docker images rgs-webapp-prod --format "Size: {{.Size}}"
    echo.
    echo You can now:
    echo - Open http://localhost:3000 in your browser
    echo - Test performance and functionality
    echo - View logs: docker-compose logs -f prod
    echo.
    echo Press any key to stop the container...
    pause >nul
)

echo [STEP 5/5] Stopping production container...
docker-compose down
echo [DONE] Production test complete
echo.
goto :eof

:end
echo ========================================
echo  All Tests Complete
echo ========================================
echo.
echo To start using Docker:
echo 1. Run docker-start.bat
echo 2. Choose your mode
echo 3. Open http://localhost:3000
echo.
pause
