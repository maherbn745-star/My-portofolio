@echo off
title Portfolio Server (Port 8001)
echo Starting Portfolio Server on Port 8001...
echo.
echo Please close any other Portfolio Command Windows first!
echo.
echo Your site will open automatically at http://localhost:8001
echo Keep this window open while using the site.
echo.
:: Wait 2 seconds for server to initialize before opening browser
timeout /t 2 >nul
start http://localhost:8001
python -m http.server 8001
pause
