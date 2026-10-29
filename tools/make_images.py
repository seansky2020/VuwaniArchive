"""Crop and compress chosen photos from photos/ into assets/img/.
Run: python3 tools/make_images.py
Each entry: output path under assets/img, source, crop centre (x, y as fractions), crop width as a fraction of the photo, aspect (w/h), output width.
Rule: every photo used on the site shows the jacket on."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "photos"
OUT = ROOT / "assets/img"

CROPS = [
    ("waitlist/hero", "IMG_8853.webp", 0.50, 0.50, 1.00, 4 / 5, 1400),
    ("waitlist/detail-lapel", "IMG_8567.webp", 0.52, 0.80, 0.80, 1, 900),
    ("waitlist/detail-lining", "IMG_8662.webp", 0.50, 0.40, 0.62, 1, 900),
    ("waitlist/detail-cuff", "IMG_8569.webp", 0.55, 0.66, 0.70, 1, 900),
    ("waitlist/inheritors", "IMG_8707.webp", 0.50, 0.40, 1.00, 1, 1100),
    ("waitlist/plate-street", "IMG_8891.webp", 0.50, 0.55, 1.00, 4 / 5, 900),
    ("waitlist/plate-rust", "IMG_8920.webp", 0.50, 0.50, 1.00, 4 / 5, 900),
    ("waitlist/plate-stance", "IMG_8910.webp", 0.50, 0.55, 1.00, 4 / 5, 900),
    ("waitlist/plate-car", "IMG_8943.webp", 0.70, 0.50, 1.00, 4 / 5, 900),
    # Home and about pages
    ("site/home-hero", "IMG_8891.webp", 0.50, 0.55, 1.00, 4 / 5, 1300),
    ("site/grit", "IMG_8910.webp", 0.50, 0.55, 1.00, 4 / 5, 900),
    ("site/grace", "IMG_8569.webp", 0.55, 0.62, 0.80, 4 / 5, 900),
    ("site/about-hero", "IMG_8720.webp", 0.50, 0.55, 1.00, 4 / 5, 1100),
    ("site/fitting", "IMG_8662.webp", 0.50, 0.42, 0.80, 4 / 5, 1000),
    # Garments: lead image first
    ("garments/0417-1", "IMG_8853.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0417-2", "IMG_8891.webp", 0.50, 0.55, 1.00, 4 / 5, 1000),
    ("garments/0417-3", "IMG_8920.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0418-1", "IMG_8569.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0418-2", "IMG_8567.webp", 0.50, 0.60, 1.00, 4 / 5, 1000),
    ("garments/0419-1", "IMG_8664.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0419-2", "IMG_8662.webp", 0.50, 0.45, 1.00, 4 / 5, 1000),
    ("garments/0419-3", "IMG_8717.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0420-1", "IMG_8103.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0420-2", "IMG_8104.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0420-3", "IMG_8118.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0421-1", "IMG_8263.webp", 0.50, 0.45, 1.00, 4 / 5, 1000),
    ("garments/0421-2", "IMG_8270.webp", 0.50, 0.45, 1.00, 4 / 5, 1000),
    ("garments/0421-3", "IMG_8282.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0422-1", "IMG_8732.webp", 0.50, 0.50, 1.00, 4 / 5, 1000),
    ("garments/0422-2", "IMG_8835.webp", 0.50, 0.55, 1.00, 4 / 5, 1000),
    ("garments/0422-3", "IMG_8850.webp", 0.48, 0.50, 1.00, 4 / 5, 1000),
]

for name, src, cx, cy, frac, aspect, out_w in CROPS:
    im = ImageOps.exif_transpose(Image.open(SRC / src)).convert("RGB")
    W, H = im.size
    w = W * frac
    h = w / aspect
    if h > H:
        h = H
        w = h * aspect
    left = min(max(cx * W - w / 2, 0), W - w)
    top = min(max(cy * H - h / 2, 0), H - h)
    crop = im.crop((round(left), round(top), round(left + w), round(top + h)))
    crop = crop.resize((out_w, round(out_w / aspect)), Image.LANCZOS)
    out = OUT / f"{name}.webp"
    out.parent.mkdir(parents=True, exist_ok=True)
    crop.save(out, "WEBP", quality=80, method=6)
    print(name, crop.size, out.stat().st_size // 1024, "KB")

# Link preview image for WhatsApp, Instagram and X: 1200 x 630 JPEG
im = ImageOps.exif_transpose(Image.open(SRC / "IMG_8853.webp")).convert("RGB")
W, H = im.size
h = W * 630 / 1200
top = H * 0.30 - h / 2
crop = im.crop((0, round(max(top, 0)), W, round(max(top, 0) + h))).resize((1200, 630), Image.LANCZOS)
crop.save(OUT / "waitlist/share.jpg", "JPEG", quality=82, optimize=True, progressive=True)
print("share", crop.size)
