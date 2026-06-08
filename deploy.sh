#!/usr/bin/env bash
set -e

echo "🔨 Building..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Done! Live at https://www.csrindustries.in"
