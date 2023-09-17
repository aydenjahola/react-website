# react-website
Code for the website developed for redbrick using react

## Deployment
Currently on `hardcase` this repo is stored at `/storage/webtree/redbrick/main-site` and the site is both synced and rebuilt via the
`update-site.sh` script.

There is an hourly crontab stored in `/var/cron/tabs/root` which just runs the aforementioned script.
