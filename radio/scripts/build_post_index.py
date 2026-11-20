#!/usr/bin/env python3
"""Create post/index.json for local previews or fully static deployments."""
import json
from pathlib import Path

root = Path(__file__).resolve().parent.parent
posts = root / "post"
folders = sorted(path.name for path in posts.iterdir()
                 if path.is_dir() and not path.name.startswith("_")
                 and (path / "post.txt").is_file())
index = posts / "index.json"
index.write_text(json.dumps(folders, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(f"Indexed {len(folders)} posts in {index}")
