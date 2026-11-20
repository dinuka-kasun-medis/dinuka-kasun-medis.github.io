# Signal & Static — folder-based radio blog

A mobile-friendly vintage radio blog designed for GitHub Pages. You can publish **each post by adding only two files**: `post.txt` and `image.png` inside a new folder under `post/`. You never need to edit `index.html` for a new article.

## 1. Folder structure

```text
radio/
├── index.html
├── post/
│   ├── first-rtl-sdr-experiment/
│   │   ├── image.png
│   │   └── post.txt
│   ├── antenna-at-the-window/
│   │   ├── image.png
│   │   └── post.txt
│   └── _POST_TEMPLATE/          # ignored; copy this folder to make a post
│       ├── image.png
│       └── post.txt
└── scripts/
    └── build_post_index.py
```

Use readable, short folder names like `first-rtl-sdr-experiment`, `my-2m-antenna`, etc. Folder names are also the permanent article URL fragments. **Do not rename a folder after sharing its article link**, or the old link stops working.

## 2. Format of post.txt

Plain UTF-8 text. Each header must be on one line. Use **a line with only three hyphens** (`---`) to mark the beginning of the article body. Everything below `---` is the full article text, with blank lines separating paragraphs.

```text
Title: My First RTL-SDR Experiment
Date: 2026-11-20
Category: SDR
Band: 145.625 MHz
Summary: A short preview that appears on the blog homepage.
Instagram: https://www.instagram.com/p/PASTE_YOUR_POST_ID/
ImageAlt: My SDR receiver and antenna near the window
---
Today I started experimenting with my RTL-SDR receiver. 📻

Here is my second paragraph. This can contain the original Instagram caption.

#SDR #HamRadio #RadioListening
```

- **Title:** preferred article title (if missing, the folder name becomes the title).
- **Date:** `YYYY-MM-DD`; newer dated entries appear first (optional but recommended).
- **Category:** any category, e.g. `SDR`, `Antennas`, `Listening`, `Radio History` (filters are created automatically).
- **Band:** optional topic label, e.g. `40m`, `145.625 MHz`, or `RTL-SDR V3`.
- **Summary:** optional, automatically extracted from the body if omitted.
- **Instagram:** optional direct link back to your Instagram post.
- **ImageAlt:** optional short image description.
- **---:** required separator if you use headers. The text below it is the article content. Leave blank lines between paragraphs. The blog displays plain text safely, without allowing HTML embedded in captions.
- **image.png:** the featured image and archive preview; it scales and crops automatically to fit each layout. Use a PNG with any dimensions, ideally at least 1200px wide. If the file is missing or fails, a vintage-style illustration appears.

Only the `post.txt` file is required to create an article; `image.png` is strongly recommended.

## 3. Publishing to your existing GitHub Pages website

Your current site repository: `dinuka-kasun-medis/dinuka-kasun-medis.github.io`.

1. Upload the **contents** of this folder under `radio/` in that repository.
2. Visit `https://dinuka-kasun-medis.github.io/radio/` after GitHub Pages publishes the change.
3. For the next article, create `radio/post/your-post-title/` and upload only `post.txt` and `image.png` there. Commit the files.
4. Refresh the blog. The new folder is discovered automatically through GitHub's public API. The blog layout, category filters, featured post, post count and article view all adapt automatically.

The blog's JavaScript assumes a **public** GitHub repository, `main` branch, and the path `radio/`. If you use another repository, branch or blog path, edit `GITHUB_CONFIG` once in `index.html`. GitHub's public content API has unauthenticated rate limits, so for a busier site consider the optional workflow below.

### Optional GitHub Actions build (avoids directory API limits)

For a fully static, rate-limit-free directory index, copy `GITHUB_WORKFLOW_OPTIONAL/radio-pages.yml` to **`.github/workflows/radio-pages.yml` at the repository root**, not inside the `radio/` folder. In GitHub Settings → Pages choose **Source: GitHub Actions**. The action rebuilds `radio/post/index.json` and deploys the whole repository root whenever a new commit is pushed to `main`.

**Important:** The workflow assumes your existing website is a simple static website. It deploys files from the whole repository, not a Jekyll build, so if your main site uses Jekyll or another build process, customize the workflow first or just use the public GitHub API mode. You do **not** need the workflow for ordinary public GitHub Pages folder discovery.

## 4. Preview locally on your Mac

When you open `index.html` as `file://`, browsers restrict `fetch()` from local files, and there is no public GitHub content API folder listing for your uncommitted posts. Preview via a local web server instead:

```bash
cd path/to/radio
python3 scripts/build_post_index.py
python3 -m http.server 8000
```

Open `http://localhost:8000/`. **Run `python3 scripts/build_post_index.py` again whenever you create/delete a local post folder**, then refresh the browser. This generates `post/index.json` locally; if you upload that generated index to GitHub while using *only* branch-based Pages, you will need to rebuild and commit it whenever posts change, or delete `post/index.json` so live GitHub API discovery takes over. The optional Actions workflow regenerates it automatically in the deployed site without committing it.

## 5. Sample articles

The two built-in posts and their pictures are **editable demo content**, not images imported from Instagram. Remove the demo folders if you do not want them visible on your site. `_POST_TEMPLATE` is ignored and is only for copying.

This is not an Instagram API integration. You manually copy your original Instagram image and caption into each post folder. No external libraries, backend, database, or paid hosting are needed.
