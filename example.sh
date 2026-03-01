#!/bin/bash

# Get Directory of the Shell Script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Start the Python Script in the Same Folder
python3 "$SCRIPT_DIR/mein_script.py"
