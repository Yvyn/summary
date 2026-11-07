#!/bin/sh
# Regenerates the downloadable CV PDFs from cv.html and ua/cv.html.
# Run it after every CV edit: sh scripts/build-cv-pdf.sh
# Needs Google Chrome, and internet access for the web fonts.
set -e

root="$(cd "$(dirname "$0")/.." && pwd)"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
mkdir -p "$root/assets"

build() {
  "$chrome" --headless=new --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=8000 \
    --print-to-pdf="$root/assets/$2" "file://$root/$1" 2>/dev/null
  echo "assets/$2"
}

build cv.html Yurii-Vynokurov-QA-Engineer-CV.pdf
build ua/cv.html Yurii-Vynokurov-QA-Engineer-CV-UA.pdf
