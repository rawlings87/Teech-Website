@echo off
echo ========================================
echo  Docker Setup Validation
echo  Rawlings Global Solutions
echo ========================================
echo.

set VALIDATION_PASSED=1

REM Test 1: Check if Docker is installed
echo [TEST 1] Checking if Docker is installed...
where docker >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Docker is not installed
    echo        Install from: https://www.docker.com/products/docker-desktop
    set VALIDATION_PASSED=0
) else (
    echo [PASS] Docker is installed
    docker --version
)
echo.

REM Test 2: Check if Docker Compose is available
echo [TEST 2] Checking if Docker Compose is available...
docker-compose --version >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Docker Compose is not available
    set VALIDATION_PASSED=0
) else (
    echo [PASS] Docker Compose is available
    docker-compose --version
)
echo.

REM Test 3: Check if Docker is running
echo [TEST 3] Checking if Docker daemon is running...
docker ps >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [FAIL] Docker daemon is not running
    echo        Please start Docker Desktop
    set VALIDATION_PASSED=0
) else (
    echo [PASS] Docker daemon is running
)
echo.

REM Test 4: Check if required files exist
echo [TEST 4] Checking if Docker configuration files exist...

set FILES_OK=1

if not exist "Dockerfile" (
    echo [FAIL] Dockerfile not found
    set FILES_OK=0
)

if not exist "Dockerfile.dev" (
    echo [FAIL] Dockerfile.dev not found
    set FILES_OK=0
)

if not exist "docker-compose.yml" (
    echo [FAIL] docker-compose.yml not found
    set FILES_OK=0
)

if not exist ".dockerignore" (
    echo [FAIL] .dockerignore not found
    set FILES_OK=0
)

if not exist "package.json" (
    echo [FAIL] package.json not found
    set FILES_OK=0
)

if not exist "next.config.ts" (
    echo [FAIL] next.config.ts not found
    set FILES_OK=0
)

if %FILES_OK%==0 (
    echo [FAIL] Some required files are missing
    set VALIDATION_PASSED=0
) else (
    echo [PASS] All required files exist
    echo        - Dockerfile (production)
    echo        - Dockerfile.dev (development)
    echo        - docker-compose.yml
    echo        - .dockerignore
    echo        - package.json
    echo        - next.config.ts
)
echo.

REM Test 5: Check next.config.ts for standalone output
echo [TEST 5] Checking Next.js configuration...
findstr /C:"standalone" next.config.ts >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [WARN] next.config.ts may not have 'output: standalone'
    echo        This is required for Docker deployment
) else (
    echo [PASS] Next.js configured for standalone output
)
echo.

REM Test 6: Check port availability
echo [TEST 6] Checking if port 3000 is available...
netstat -ano | findstr ":3000" >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [WARN] Port 3000 is already in use
    echo        You may need to stop other services or change the port
) else (
    echo [PASS] Port 3000 is available
)
echo.

REM Test 7: Check system resources
echo [TEST 7] Checking system resources...
docker info >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [PASS] Docker system is healthy
    docker info | findstr "CPUs Memory"
) else (
    echo [WARN] Could not retrieve Docker system info
)
echo.

REM Final Summary
echo ========================================
echo  VALIDATION SUMMARY
echo ========================================
echo.

if %VALIDATION_PASSED%==1 (
    echo [SUCCESS] All validations passed!
    echo.
    echo You are ready to run Docker containers.
    echo.
    echo Next steps:
    echo 1. Double-click docker-start.bat
    echo 2. Choose development or production mode
    echo 3. Wait for build to complete
    echo 4. Open http://localhost:3000
    echo.
) else (
    echo [FAILED] Some validations failed
    echo.
    echo Please fix the issues above and try again.
    echo.
    echo Common solutions:
    echo - Install Docker Desktop from docker.com
    echo - Start Docker Desktop and wait for it to be ready
    echo - Ensure all files are in the correct directory
    echo.
)

echo ========================================
pause
