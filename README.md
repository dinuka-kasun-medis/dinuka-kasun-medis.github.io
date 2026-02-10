# dinuka-kasun-medis.github.io

Personal portfolio — terminal theme.
Live at: **https://dinuka-kasun-medis.github.io**

---

## 📁 Folder Structure

```
dinuka-kasun-medis.github.io/
│
├── index.html                  ← Main portfolio page (dinuka-kasun-medis.github.io)
│
├── assets/
│   ├── css/
│   │   └── terminal.css        ← Shared styles for ALL pages
│   └── js/
│       └── main.js             ← Shared scripts for ALL pages
│
├── morse-code/
│   └── index.html              ← dinuka-kasun-medis.github.io/morse-code
│
└── README.md
```

---

## ➕ Adding a New Sub-Project

1. Create a new folder with the project name (must match the URL slug you want):
   ```
   mkdir my-project
   ```

2. Add an `index.html` inside it using the template below.

3. Push — it will be live at `dinuka-kasun-medis.github.io/my-project`.

---

## 📄 Sub-Project Template

Copy this into `your-project/index.html` and replace the content section:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Project — Dinuka Kasun Medis</title>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../assets/css/terminal.css" />
</head>
<body>
<div class="shell">

  <div class="window">
    <div class="titlebar">
      <div class="dot dot-r"></div>
      <div class="dot dot-y"></div>
      <div class="dot dot-g"></div>
      <span class="tab-title"><span>dinuka</span>@portfolio: ~/your-project</span>
    </div>
    <div class="body">
      <div class="prompt">
        <span class="p-user">dinuka</span><span class="p-at">@</span>
        <span class="p-host">portfolio</span><span class="p-colon">:</span>
        <span class="p-path">~/your-project</span><span class="p-sign">$</span>
        <span class="p-cmd">./your-project</span>
      </div>
      <div class="output">
        <!-- YOUR PROJECT CONTENT HERE -->
      </div>
    </div>
  </div>

  <div style="text-align:center; padding: 10px 0 40px;">
    <a href="../" style="color: var(--grey-lt); font-size: 12px;
       text-decoration: none; font-family: var(--font-mono);">
      ← cd ../ &nbsp; back to portfolio
    </a>
  </div>

</div>
<script src="../assets/js/main.js"></script>
</body>
</html>
```

---

## 🔗 URL Mapping

| File path                          | URL                                              |
|------------------------------------|--------------------------------------------------|
| `index.html`                       | `dinuka-kasun-medis.github.io`                   |
| `morse-code/index.html`            | `dinuka-kasun-medis.github.io/morse-code`        |
| `your-project/index.html`          | `dinuka-kasun-medis.github.io/your-project`      |
