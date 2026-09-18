@echo off
title Stop vue-music-player
echo Stopping music player server...

for %%P in (5173 5174 5175) do (
  for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%%P" ^| findstr "LISTENING"') do (
    taskkill /f /pid %%a >nul 2>&1
  )
)

echo Done. The player has been stopped.
timeout /t 2 /nobreak >nul
exit
