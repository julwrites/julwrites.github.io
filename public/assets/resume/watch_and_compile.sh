#!/bin/bash

# LaTeX Resume Auto-Compiler
# Watches Resume_Julian_Teh.tex and recompiles on changes

TEX_FILE="Resume_Julian_Teh.tex"
PDFLATEX="/usr/local/texlive/2025/bin/universal-darwin/pdflatex"

echo "🔍 Watching $TEX_FILE for changes..."
echo "Press Ctrl+C to stop"
echo ""

# Compile once at start
echo "📝 Initial compilation..."
$PDFLATEX -interaction=nonstopmode "$TEX_FILE" > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ PDF generated successfully!"
else
    echo "❌ Compilation failed. Check the .log file for errors."
fi
echo ""

# Watch for changes using fswatch (install with: brew install fswatch)
if command -v fswatch &> /dev/null; then
    fswatch -o "$TEX_FILE" | while read f; do
        echo "🔄 Change detected, recompiling..."
        $PDFLATEX -interaction=nonstopmode "$TEX_FILE" > /dev/null 2>&1
        if [ $? -eq 0 ]; then
            echo "✅ PDF updated at $(date '+%H:%M:%S')"
        else
            echo "❌ Compilation failed at $(date '+%H:%M:%S')"
        fi
    done
else
    echo "⚠️  fswatch not found. Install it with: brew install fswatch"
    echo "Falling back to manual polling..."
    
    LAST_MOD=$(stat -f %m "$TEX_FILE")
    while true; do
        sleep 2
        CURRENT_MOD=$(stat -f %m "$TEX_FILE")
        if [ "$CURRENT_MOD" != "$LAST_MOD" ]; then
            echo "🔄 Change detected, recompiling..."
            $PDFLATEX -interaction=nonstopmode "$TEX_FILE" > /dev/null 2>&1
            if [ $? -eq 0 ]; then
                echo "✅ PDF updated at $(date '+%H:%M:%S')"
            else
                echo "❌ Compilation failed at $(date '+%H:%M:%S')"
            fi
            LAST_MOD=$CURRENT_MOD
        fi
    done
fi
