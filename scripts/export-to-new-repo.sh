#!/usr/bin/env bash
# Export the current project into a fresh git repository in a new directory.
# Usage: ./scripts/export-to-new-repo.sh [target-path] [package-name]

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
ROOT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)

TARGET_DIR=${1:-"$ROOT_DIR/../nextjs_portfolio_v3"}
PACKAGE_NAME=${2:-}

if [[ -z "$TARGET_DIR" ]]; then
  echo "Usage: $0 [target-path] [package-name]" >&2
  exit 1
fi

mkdir -p "$TARGET_DIR"
if [ -n "$(ls -A "$TARGET_DIR" 2>/dev/null)" ]; then
  echo "Target directory '$TARGET_DIR' is not empty. Please provide an empty or new path." >&2
  exit 1
fi

echo "Copying project to $TARGET_DIR ..."
rsync -a \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='out' \
  --exclude='*.log' \
  "$ROOT_DIR/" "$TARGET_DIR/"

pushd "$TARGET_DIR" >/dev/null
rm -rf .git

echo "Initializing fresh git repository ..."
git init -b main >/dev/null

echo "Staging files ..."
git add .

if [[ -n "$PACKAGE_NAME" ]]; then
  if command -v jq >/dev/null 2>&1; then
    tmp=$(mktemp)
    jq --arg name "$PACKAGE_NAME" '.name = $name' package.json > "$tmp" && mv "$tmp" package.json
    git add package.json
  else
    echo "jq is not available; package name will remain unchanged." >&2
  fi
fi

echo "Creating initial commit ..."
git commit -m "Initial commit" >/dev/null

popd >/dev/null

echo "Done. New repository created at $TARGET_DIR" \
     "$( [ -n "$PACKAGE_NAME" ] && printf "with package name '%s'" "$PACKAGE_NAME" )"
