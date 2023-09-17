cd /storage/webtree/redbrick/main-site

git fetch -a

git pull -r
nix-shell -p nodejs --run "npm run build"
