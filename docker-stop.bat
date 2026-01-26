@echo off
echo ========================================
echo  Rawlings Global Solutions
echo  Docker Stop Script
echo ========================================
echo.

echo Stopping all containers...
docker-compose down

echo.
echo [OK] All containers stopped
echo.
pause
