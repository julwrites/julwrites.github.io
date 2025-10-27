# Makefile for LaTeX Resume

# Main LaTeX file
TEX_FILE = Resume_Julian_Teh.tex
PDF_FILE = $(TEX_FILE:.tex=.pdf)

# LaTeX compiler with explicit path
LATEX = /Library/TeX/texbin/pdflatex
LATEX_FLAGS = -interaction=nonstopmode -halt-on-error

# Alternative: try to find pdflatex in PATH if explicit path fails
LATEX_ALT = pdflatex

# Intermediate files to clean
AUX_FILES = *.aux *.log *.out *.toc *.lof *.lot *.bbl *.blg *.nav *.snm *.vrb

# Default target
all: $(PDF_FILE)

# Build PDF from LaTeX with fallback
$(PDF_FILE): $(TEX_FILE)
	@echo "Compiling LaTeX document..."
	@if command -v $(LATEX) >/dev/null 2>&1; then \
		$(LATEX) $(LATEX_FLAGS) $(TEX_FILE); \
	elif command -v $(LATEX_ALT) >/dev/null 2>&1; then \
		$(LATEX_ALT) $(LATEX_FLAGS) $(TEX_FILE); \
	else \
		echo "Error: pdflatex not found. Please install MacTeX:"; \
		echo "  brew install --cask mactex"; \
		echo "Or ensure /Library/TeX/texbin is in your PATH"; \
		exit 1; \
	fi
	@echo "Build complete: $(PDF_FILE)"

# Clean intermediate files
clean:
	@echo "Cleaning intermediate files..."
	rm -f $(AUX_FILES)

# Clean everything including PDF
clean-all: clean
	@echo "Cleaning PDF file..."
	rm -f $(PDF_FILE)

# Rebuild from scratch
rebuild: clean-all all

# Install dependencies (macOS specific)
install-deps:
	@echo "Installing LaTeX dependencies (macOS)..."
	brew install --cask mactex

# Check LaTeX installation
check-latex:
	@echo "Checking LaTeX installation..."
	@if command -v $(LATEX) >/dev/null 2>&1; then \
		echo "✓ pdflatex found at: $(LATEX)"; \
	elif command -v $(LATEX_ALT) >/dev/null 2>&1; then \
		echo "✓ pdflatex found at: $(LATEX_ALT)"; \
	else \
		echo "✗ pdflatex not found"; \
		echo "Available LaTeX installations:"; \
		ls -la /Library/TeX/texbin/ 2>/dev/null || echo "  No /Library/TeX/texbin found"; \
		ls -la /usr/local/texlive/*/bin/*/pdflatex 2>/dev/null || echo "  No /usr/local/texlive found"; \
	fi

# Help target
help:
	@echo "Available targets:"
	@echo "  all        - Build the PDF (default)"
	@echo "  clean      - Remove intermediate files"
	@echo "  clean-all  - Remove all generated files including PDF"
	@echo "  rebuild    - Clean and rebuild from scratch"
	@echo "  install-deps - Install LaTeX (macOS)"
	@echo "  check-latex - Check LaTeX installation"
	@echo "  help       - Show this help"

.PHONY: all clean clean-all rebuild install-deps check-latex help
