# MagePeople Documentation Hub

Static HTML documentation site for the MagePeople WordPress plugin suite.

## Deployment

The site is automatically deployed to **cPanel** whenever a **GitHub Release** is published.

### Required GitHub Secrets

Configure these secrets in your repository at **Settings → Secrets and variables → Actions**:

| Secret            | Description                                      | Example value                     |
|-------------------|--------------------------------------------------|-----------------------------------|
| `FTP_SERVER`      | FTP hostname                                     | `ftp.docs.mage-people.com`        |
| `FTP_USERNAME`    | cPanel FTP username                              | `docs`                            |
| `FTP_PASSWORD`    | cPanel FTP password                              | *(your password)*                  |
| `FTP_DIRECTORY`   | Remote path                                      | `public_html/v1/`                 |

### How to create a Release

1. Go to your repository on GitHub.
2. Click **Releases** → **Create a new release**.
3. Choose or create a tag (e.g. `v1.0.0`).
4. Write release notes.
5. Click **Publish release**.

### How deployment works

1. Publishing a release triggers `.github/workflows/deploy.yml`.
2. The workflow checks out the tagged commit.
3. It validates that `index.html`, `plugins/`, and `style.css` exist.
4. Files are uploaded to `public_html/docs/` via FTP.
5. Only changed/new files are transferred; unrelated remote files are left alone.
6. The workflow fails with a clear error message if anything goes wrong.

### Files excluded from upload

- `.git/`, `.github/`, `.opencode/`
- `.gitignore`, `README.md`, `LICENSE`
- `node_modules/`, `.DS_Store`, `Thumbs.db`
- Editor artifacts (`*.swp`, `.vscode/`, `.idea/`)

### Common troubleshooting

| Symptom                          | Likely cause                              |
|----------------------------------|-------------------------------------------|
| "Error: connect: Connection refused" | FTP server hostname is wrong or port 21 is blocked |
| "Error: Authentication failed"   | FTP username or password is incorrect     |
| "Error: File not found"          | Remote directory in `FTP_DIRECTORY` does not exist |
| Files not showing on the server  | Check that `FTP_DIRECTORY` ends with a trailing `/` |
| Old files still present          | The workflow does **not** delete remote files — remove stale files manually via cPanel File Manager |

### Local development

Open `index.html` directly in a browser — no build step required.
