"""Generate brand/tokens.css from brand/tokens.json. Run: python3 tools/build_tokens.py"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
tokens = json.loads((ROOT / "brand/tokens.json").read_text())


def themed(theme):
    lines = []
    for t in tokens["color"]["tokens"]:
        lines.append(f"  --{t['name']}: {t['value'][theme]};")
    for t in tokens["shadow"]["tokens"]:
        lines.append(f"  --{t['name']}: {t['value'][theme]};")
    return "\n".join(lines)


fixed = []
for family in ("spacing", "radius", "stroke"):
    for t in tokens[family]["tokens"]:
        fixed.append(f"  --{t['name']}: {t['value']};")
for key, stack in tokens["type"]["families"].items():
    fixed.append(f"  --font-{key}: {stack};")

css = f"""/* Vuwani: generated from tokens.json by tools/build_tokens.py. Do not edit by hand. */
:root {{
{themed('light')}
{chr(10).join(fixed)}
}}
@media (prefers-color-scheme: dark) {{
  :root:not([data-theme="light"]) {{
{themed('dark')}
    color-scheme: dark;
  }}
}}
:root[data-theme="dark"] {{
{themed('dark')}
  color-scheme: dark;
}}
"""
(ROOT / "brand/tokens.css").write_text(css)
print("wrote brand/tokens.css")
