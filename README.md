# Statische Webseite Build-Demo

Dieses Projekt zeigt einen einfachen Build-Ablauf für CI/CD.

## Befehle

```bash
npm run lint
npm run build
npm test
```

## Ergebnis

Der Build erzeugt den Ordner:

```text
dist/
```

Darin liegen:

- `index.html`
- `style.css`
- `build-info.json`

## Pipeline

Die Pipeline führt auf GitLab und GitHub denselben Ablauf aus:

1. `lint`
2. `build`
3. `smoke_test`

Der Ordner `dist/` wird als Artefakt gespeichert.

## Dateien für CI/CD

| Plattform | Datei |
|---|---|
| GitLab CI/CD | `.gitlab-ci.yml` |
| GitHub Actions | `.github/workflows/build.yml` |

So kann im Unterricht direkt verglichen werden, wie ähnlich die Abläufe sind, obwohl die Syntax der Plattformen unterschiedlich aussieht.
