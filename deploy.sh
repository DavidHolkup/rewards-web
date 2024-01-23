#!/bin/bash

npm run deploy

cd dist/rewards-web

git init
git remote add origin git@github.com:DavidHolkup/rewards.git
git add .
git commit -m "Deploying to GitHub Pages"
git branch -M main
git push -u origin main --force

cd ..

