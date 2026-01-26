@echo off
echo ========================================
echo  Rawlings Global Solutions
echo  Development Server Launcher
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo 1. Go to https://nodejs.org/
    echo 2. Download the LTS version
    echo 3. Run the installer
    echo 4. Restart this script
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js is installed:
node --version
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] First time setup - Installing dependencies...
    echo This will take 1-3 minutes...
    echo.
    npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERROR] Installation failed!
        echo Please check your internet connection and try again.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencies installed successfully!
    echo.
)

echo ========================================
echo  Starting Development Server...
echo ========================================
echo.
echo The website will open at:
echo http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Start the development server
npm run dev

pause
