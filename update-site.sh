git fetch -a

length=$(git diff | wc -l)

if [ "$length" -ne "0" ]; then
        git pull -r
        nix-shell -p nodejs --run "npm run build"
fi;
