# Vuwani Archive

The website for Vuwani, a thrift store and style archive of South African tailoring. Restored suits from the 60s, 70s and 80s, found in Joburg's markets, passed on to the Inheritors.

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | Home: the thesis, Archive 001 highlights, how a suit is restored, the Inheritors |
| `archive.html` | Every garment in the drop, filterable by status |
| `garment.html?id=0417` | One garment: plates, spec, archive tag and archive card |
| `about.html` | The manifesto and fitting bookings |
| `waitlist.html` | Pre-launch page: collects names and emails through Netlify Forms (form name `waitlist`) |
| `waitlist-thanks.html` | Shown after someone joins |
| `assets/img/waitlist/` | Photos for the waitlist page. See its README for file names |
| `assets/js/garments.js` | The archive data. **The six entries in it are samples**: replace them with real pieces |
| `assets/css/site.css` | Site layout |
| `brand/` | The brand system: guidelines PDF, tokens, components, logos. See `brand/README.md` |

It is plain HTML, CSS and JavaScript with no build step.

## Run it locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Add a garment

Copy an entry in `assets/js/garments.js`, give it the next number, and fill in its details. Put photographs in `assets/img/` and list their paths in `photos` (lead image first). Until then the page shows a cloth-coloured placeholder.

## Change a brand colour or size

Edit `brand/tokens.json`, then run:

```bash
python3 tools/build_tokens.py
```

## Still to do

- Real photographs and garment data
- The Substack link in the header and footer points to substack.com until the publication exists
- A booking form or WhatsApp link for fittings
- A drawn vector logo to replace the interim wordmark
