@echo off
echo ========================================
echo  Rawlings Global Solutions
echo  Docker Launcher
echo ========================================
echo.

REM Check if Docker is installed
where docker >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Docker is not installed or not running!
    echo.
    echo Please install Docker Desktop first:
    echo 1. Go to https://www.docker.com/products/docker-desktop
    echo 2. Download Docker Desktop for Windows
    echo 3. Run the installer
    echo 4. Start Docker Desktop
    echo 5. Restart this script
    echo.
    pause
    exit /b 1
)

echo [OK] Docker is installed:
docker --version
echo.

REM Check if Docker is running
docker ps >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Docker is not running!
    echo.
    echo Please start Docker Desktop and try again.
    echo.
    pause
    exit /b 1
)

echo [OK] Docker is running
echo.

echo Choose deployment mode:
echo [1] Development (with hot reload)
echo [2] Production (optimized build)
echo.
set /p mode="Enter 1 or 2: "

if "%mode%"=="1" (
    echo.
    echo ========================================
    echo  Starting Development Server...
    echo ========================================
    echo.
    echo Building and starting container...
    echo This may take 2-3 minutes on first run...
    echo.
    docker-compose up dev
) else if "%mode%"=="2" (
    echo.
    echo ========================================
    echo  Building Production Image...
    echo ========================================
    echo.
    echo Building optimized production image...
    echo This may take 3-5 minutes on first run...
    echo.
    docker-compose up --build prod
) else (
    echo.
    echo [ERROR] Invalid option. Please enter 1 or 2.
    pause
    exit /b 1
)

pause
