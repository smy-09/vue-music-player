@echo off
title vue-music-player launcher
cd /d "%~dp0"

if not exist node_modules (
  echo First run detected. Installing dependencies, please wait...
  call npm install --registry=https://registry.npmmirror.com
  if errorlevel 1 (
    echo.
    echo Install failed. Please check your network and try again.
    pause
    exit /b 1
  )
)

echo Starting music player...
echo The server window is minimized to the taskbar. Double-click StopPlayer.bat to stop it.
start "vue-music-player" /min cmd /c "npm run dev >> player-server.log 2>&1"

echo Browser will open automatically in a few seconds...
timeout /t 3 /nobreak >nul
exit
