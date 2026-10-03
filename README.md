# Fides API — Documentation Site

Static docs site for [monsterwhat/Fides](https://github.com/monsterwhat/Fides),
the electronic-invoicing API for Hacienda Costa Rica (v4.4). Published with
GitHub Pages: `https://monsterwhat.github.io/Fides-API/`

## Contents

| Path | What |
|------|------|
| `index.html` | Landing page |
| `api-reference.html` | Endpoint index |
| `api-*.html` | Per-area reference (auth, invoices, documents, submissions, companies, branches, certificates, credentials, api-keys, pos, reports, webhooks, public) |
| `openapi.json` | **Generated** OpenAPI 3.1 spec, synced from Fides code (see below; absent until the first sync run) |
| `assets/`, `styles.css`, `nav.js`, `i18n.js`, `i18n/` | Site chrome, styling, nav, translations |

## Local preview

No build step — serve the folder with any static server, e.g.:

```bash
npx serve .
```

or open `index.html` directly (some fetch-based bits need `http://`, not `file://`).

## GitHub Pages

Deploys via [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
(official `deploy-pages`, on every `main` push).

One-time owner step (not doable via git) — repo **Settings → Pages →
Build and deployment → Source: "GitHub Actions"**. After that, pushes
redeploy automatically.

## Keeping docs in sync with code

The hand-written `api-*.html` pages drift (code currently exposes 44
routes; prose still says 38). The structural fix:

1. Fides exposes its spec from code (utoipa): `GET /api/v1/openapi.json`,
   plus local helper [`api/examples/export_openapi.rs`](https://github.com/monsterwhat/Fides/blob/main/api/examples/export_openapi.rs)
   in the Fides repo:
   ```bash
   cargo run -q -p fides-api --example export_openapi > openapi.json
   ```
2. [`.github/workflows/sync-spec.yml`](.github/workflows/sync-spec.yml)
   runs that weekly and on manual dispatch, and commits `openapi.json`
   here only when it changed. **Run it once manually** — that first run
   creates `openapi.json`.
3. The Pages workflow publishes whatever is on `main`, spec included.

Optional: ping this repo from Fides on every push via
`repository_dispatch` (needs a token with `repo` scope) for instant sync
instead of weekly.
