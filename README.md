# appsec-ghas-test

GHAS entegrasyonu doğrulama test repo'su. **Kasıtlı zafiyetli** — production'da kullanma.

- `app.js` → command injection (CodeQL/Semgrep testi)
- `package.json` → eski lodash/express (Dependabot testi)
