# crossgate-gor-website-backup
A website backup for the guild of MMORPG - Crossgate. It was date back to 2003.


## How To


```sh
# download the website backup from webarchive.org
wayback_machine_downloader http://hk.geocities.com/roam_group

# fix the encoding
find . -name "*.html" -exec bash -c 'iconv -f BIG-5 -t utf-8 "{}" > ../output/"{}"' \;
```


