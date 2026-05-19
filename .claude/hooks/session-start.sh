#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Start HTTP server for the app on port 8765 (needed for Playwright tests)
if ! lsof -ti:8765 > /dev/null 2>&1; then
  python3 -m http.server 8765 --directory "$CLAUDE_PROJECT_DIR" > /tmp/family-dojo-server.log 2>&1 &
  echo "Started HTTP server on port 8765 (pid $!)"
else
  echo "HTTP server already running on port 8765"
fi
