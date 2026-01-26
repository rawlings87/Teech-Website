@echo off
echo ========================================
echo  Rawlings Global Solutions
echo  Dependency Installer
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

echo [OK] Node.js is installed
node --version
npm --version
echo.

echo Installing dependencies...
echo This will take 1-3 minutes...
echo.

npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo [SUCCESS] Installation Complete!
    echo ========================================
    echo.
    echo Next step: Run the development server
    echo Double-click: run-dev-server.bat
    echo.
) else (
    echo.
    echo [ERROR] Installation failed!
    echo Please check your internet connection and try again.
    echo.
)

pause
