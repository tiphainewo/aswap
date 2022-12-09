#!/usr/bin/env sh

set -e

npm run build

git add dist && git commit -m 'deploy'

git subtree push --prefix dist origin gh-pages

cd -