@echo off

REM Get the Directory of the Batch Script
set SCRIPT_DIR=%~dp0

REM Start the Python Script in the same Folder
python "%SCRIPT_DIR%mein_script.py"
