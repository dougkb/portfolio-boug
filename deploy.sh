#!/bin/bash

# Stop script on any error
set -e

echo "🚀 Build & Deploy Docusaurus to GitHub Pages..."

# Nettoyage du dossier build
rm -rf build

# Build du site
npm run build

# Déploiement via GitHub Pages
GIT_USER=dougkb npx docusaurus deploy

echo "✅ Déploiement terminé : https://dougkb.github.io/portfolio-boug/"
