# anthonywiki.antderosa.com on the VPS

`next build` with `output: "standalone"` makes a self-contained server. Each deploy builds a release in `.releases/<sha>`; `anthonywiki.service` runs it on 127.0.0.1 and nginx serves `/_next/static` itself. Builds on the server take turns (a shared lock), so two demos never build at once.

## Install (once, as root)

1. DNS: add an A record for `anthonywiki` → 177.7.44.106 (antderosa.com DNS).
2. Clone and install:

```bash
git clone https://github.com/soupsoup/anthonywiki-demo /var/www/anthonywiki
/var/www/anthonywiki/deploy/vps/install.sh
```


3. First deploy, then HTTPS:

```bash
systemctl start anthonywiki-deploy && systemctl enable --now anthonywiki-deploy.timer
journalctl -u anthonywiki-deploy -n 20 --no-pager
systemctl status anthonywiki --no-pager | head -5
certbot --nginx -d anthonywiki.antderosa.com
```

After that, every push to main deploys within a minute. Roll back with
`sudo -u anthonywiki /var/www/anthonywiki/deploy/vps/deploy.sh --rollback <sha>`.
