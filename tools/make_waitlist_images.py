"""Crop and compress chosen photos from photos/ into assets/img/waitlist/.
Run: python3 tools/make_waitlist_images.py
Each entry: output name, source, crop centre (x, y as fractions), crop width as a fraction of the photo, aspect (w/h), output width."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "photos"
OUT = ROOT / "assets/img/waitlist"

CROPS = [
    ("hero", "IMG_8853.webp", 0.50, 0.50, 1.00, 4 / 5, 1400),
    ("detail-lapel", "IMG_8567.webp", 0.52, 0.80, 0.80, 1, 900),
    ("detail-lining", "IMG_8662.webp", 0.50, 0.40, 0.62, 1, 900),
    ("detail-cuff", "IMG_8569.webp", 0.55, 0.66, 0.70, 1, 900),
    ("inheritors", "IMG_8707.webp", 0.50, 0.40, 1.00, 1, 1100),
    ("plate-street", "IMG_8891.webp", 0.50, 0.55, 1.00, 4 / 5, 900),
    ("plate-rust", "IMG_8920.webp", 0.50, 0.50, 1.00, 4 / 5, 900),
    ("plate-stance", "IMG_8910.webp", 0.50, 0.55, 1.00, 4 / 5, 900),
    ("plate-bars", "IMG_8345.webp", 0.50, 0.50, 1.00, 4 / 5, 900),
]

OUT.mkdir(parents=True, exist_ok=True)
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
    crop.save(OUT / f"{name}.webp", "WEBP", quality=80, method=6)
    print(name, crop.size, (OUT / f"{name}.webp").stat().st_size // 1024, "KB")

# Link preview image for WhatsApp, Instagram and X: 1200 x 630 JPEG
im = ImageOps.exif_transpose(Image.open(SRC / "IMG_8853.webp")).convert("RGB")
W, H = im.size
h = W * 630 / 1200
top = H * 0.30 - h / 2
crop = im.crop((0, round(max(top, 0)), W, round(max(top, 0) + h))).resize((1200, 630), Image.LANCZOS)
crop.save(OUT / "share.jpg", "JPEG", quality=82, optimize=True, progressive=True)
print("share", crop.size)
