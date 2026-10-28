# Vuwani brand

Everything the site and anyone designing for Vuwani needs, in one place.

| File | What it is |
| --- | --- |
| `Vuwani-Brand-Guidelines.pdf` | The full guide, 16 pages. Start here. |
| `tokens.json` | Colour, type, spacing, radius, shadow and stroke values. The single source. |
| `tokens.css` | CSS custom properties generated from `tokens.json`. Run `python3 tools/build_tokens.py` after any change. |
| `components.css` | Archive tag, archive card, stamp, plate, stitch rule, buttons, lockup. |
| `logos/` | Lockup and wordmark PNGs: coal, bone and rust on transparent, plus coal, paper and concrete backgrounds. |

The logos are an interim wordmark set in type. Have a designer redraw the mark as a vector before printing tags or signage.

---

Vuwani is a thrift store and style archive of South African tailoring. It restores heavy 1960s, 70s and 80s suits found in Joburg's markets and dresses a new generation in them. Every design decision comes from one tension: **grit and grace**. The rundown industrial city of Jeppestown, Selby, Booysens, Newtown and the CBD on one side. The sharp, pressed tailoring our grandfathers wore to work in bakeries and garages on the other.

> Always look like money, even when you have none.

## The idea behind every layout

During apartheid, Black men were held to low-status work: bakery hands, mechanics' assistants, sweepers, messengers. Many of them still left home before dawn in a full suit. The suit said what the payslip could not. Vuwani exists for their children and grandchildren, the people we call **the Inheritors**, who saw that standard and want to carry it into today's hustle.

So the identity has two jobs at once:

1. **Grit carries the space.** Concrete, rust, coal, stencils, film grain, raw photography. Large, rough, honest.
2. **Grace carries the detail.** Bodoni serifs, brass hairlines, pick stitching, cuff buttons, typewritten provenance. Small, exact, deliberate.

Never swap them. Ornament is never big, and grit is never fussy. A page that is all ornament looks like a wedding invitation. A page that is all grit looks like a hardware store. Vuwani is the man in the three-piece suit standing in the hardware store.

The quality bar is Tom Ford or Brunello Cucinelli, reached with clothes from Dunusa and Noord Street. High quality, not high-end. Practical everywhere, ornate where it counts.

## Voice and copy

Vuwani speaks like a well-dressed uncle who has worked hard all his life: warm, proud, dry, never loud. He doesn't brag. He states facts and lets the cloth do the rest.

- Write in **South African English**: colour, centre, organise, programme.
- Use **we** for Vuwani and **you** for the reader. Speak about the elders with respect: *our fathers, our grandfathers, the men who went before*.
- **Name the real place, year and job.** "Booysens, 1978, mechanic's assistant" beats "vintage industrial heritage".
- Short declarative sentences. One idea each. Let some run long when telling a story.
- Sentence case for headlines and buttons. **UPPERCASE only in the stencil face** and in `eyebrow` labels.
- No emoji. No exclamation marks. No em dashes: use a full stop, a comma or the middle dot ` · `.
- Never say *luxury*, *cheap*, *bargain*, *vintage vibes*, *drip* or *elevate*. Say *restored*, *archived*, *pressed*, *built*, *worn*.
- Prices are stated plainly in rand, in the `record` face: `R 2 450`.

Real examples:

| Use | Copy |
| --- | --- |
| Campaign line | Grown from grit. Tailored like royalty. |
| Product name | Jeppes Restored Wool Suit · Batch 04 |
| Product story | Found at Dunusa in a bale of coats. Navy chalk-stripe worsted, around 1974. Shoulders rebuilt, relined in green silk, horn buttons fitted by hand. |
| Drop announcement | ARCHIVE 001 · 30 suits · Newtown · by appointment |
| Button | Reserve this suit · Book a fitting · Read the archive |
| Empty state | Nothing in this size yet. The next bale opens on Saturday. |
| Sold | This one has gone home with someone. |
| Community prompt | Tell us his name. Show us his suit. |

## Colour

The palette is named after the streets it came from. Use the token names in all work.

- `ground` is the page. In **Daylight** it is pale poured concrete. In **Night Shift** it is coal before sunrise. Both themes are first-class; editorial and campaign pages lean Night Shift, shop and archive pages lean Daylight.
- `coal` is the suit: primary buttons, full-bleed bands, the wordmark on light grounds.
- `rust` is the **only loud colour**. Links, the active state, drop callouts, the wordmark on bone. Keep it under a tenth of any screen.
- `brass` is **ornament only**: stitching, double rules, cuff-button discs, corner brackets, foil. Never body text. As type only at 24px and up, or for the italic flourish line.
- `lining` green is the silk you see only when the jacket opens. Use it once per page at most, for an inner detail.
- `stamp` red is for status stamps and always comes with the word.
- `paper`, `paper-ink`, `paper-muted` and `paper-accent` stay the same in both themes, because tags and archive cards are physical objects lying on the surface.
- Text on `coal`, `rust` (Daylight) and `lining` is `bone`. On a `rust` fill always use `on-rust`.

Rough proportion on any composition: 60 `ground` and `slab`, 25 `coal` or `paper`, 10 `rust`, 5 `brass` and `lining` together.

Every text pair holds 4.5:1 in both themes. `rust` text sits on `ground` or `paper`, not on `slab`. `rule` is decorative and may fall below 3:1; any border a person must see is `ink`.

## Typography

Four faces, each with one job. All are on Google Fonts.

- **Bodoni Moda** (`display`) is the tailoring. Use `hero`, `title` and `heading` for headlines, and `flourish` (italic) for the grace note under a heading or a pull quote. One `hero` per page.
- **Big Shoulders Stencil Display** (`stencil`) is the warehouse wall. Always uppercase. `wordmark` is for the name and drop numbers; `stencil-label` for drop names, section markers, packaging and signage. Never set a sentence in it.
- **Archivo** (`sans`) does the practical work: `lead`, `body`, `small`, `eyebrow`. Keep running text near 65 characters a line.
- **Courier Prime** (`mono`) is the archive typewriter: `record` and `record-sm` for batch numbers, dates, measurements, prices and anything that is a fact on a card.

Pairing rule: a Bodoni headline, an Archivo body and a Courier fact line is the standard stack. Stencil appears at most twice per screen. Never put Bodoni and stencil at the same size next to each other; one leads, the other whispers.

## Ornament

These details are what make the brand look expensive. Use them small and use them exactly.

- **Pick stitch** (`StitchRule`): a dashed `brass` line at `stroke-stitch`, 6px dash and 5px gap, borrowed from hand-stitched lapel edges. Use it as a divider or along the inside edge of a card.
- **Double rule**: two `brass` hairlines 3px apart, like the border on a tailor's label. Frames campaign quotes and the top of the archive card.
- **Cuff buttons**: a row of four `brass` discs that just touch, after a working sleeve cuff. A signature mark at the foot of an essay or the corner of a package. Four, always.
- **Corner brackets**: four L-shaped `brass` corners on a photo or card, as on a framed certificate.
- **The archive number**: drops are `ARCHIVE 001`, batches are `BATCH 04`, garments are `NO. 0417 / 030`, photographs are plates in Roman numerals: `PLATE IV`. Zero-pad numbers; it reads as a ledger.
- **The middle dot** ` · ` separates facts in a line: `NAVY CHALK STRIPE · 1974 · DUNUSA`.

Do not combine more than two ornaments on one element.

## Imagery

Shoot on medium-format film or grade digital to match it: deep blacks, warm grain, no gloss.

- **Light:** dawn, 5 to 7 AM, or the last hour of the day. Long shadows down a street. Sodium streetlights for Night Shift work.
- **Places:** mechanic workshops in Booysens, red-brick warehouses in Jeppestown, the bridges and rail lines at Newtown, Selby's yards, Park Station at the morning rush, a bakery floor dusted with flour.
- **People:** real Inheritors over models where possible. An immaculate suit doing real work: holding a wrench, carrying bread trays, sitting on a cement bag, waiting for a taxi. Posture upright, expression calm, never posing for the camera.
- **Archive photographs:** family photos from the 60s to 80s, shown as found, with their crop, crease and date stamp. Credit the family.
- **Details:** extreme close-ups of the work. A buttonhole, a lining, a pick stitch, a cuff, a tag. These carry product pages.
- Never use stock photography, studio white backgrounds, smiling-at-camera shots or anything that makes poverty the subject. The subject is dignity.

Frame photographs with `Plate`: square corners, an optional `brass` corner bracket, and a `record-sm` caption with plate, place and time.

## Layout

- Square corners everywhere (`radius-none`). Only tags and stamps get `radius-tag`; only cuff buttons and the round stamp are discs.
- Generous margins. Use `space-16` to `space-24` between sections on desktop and `space-12` on phone. Space is the cheapest luxury.
- A 12-column grid with wide outer margins. Let images bleed off one edge; keep text on the grid.
- Paper objects (cards, tags, plates) sit on `ground` or `slab` with `shadow-paper`. Nothing else casts a shadow.
- Texture: a faint concrete or film grain on `ground` is welcome at very low strength. Never behind body text.
- Motion is minimal: a stamp presses in (scale from 1.08 to 1, 160ms), a card lifts 2px on hover. Respect reduced motion.

## Iconography

Vuwani has no icon set. Use typographic marks: `·`, `№`, `×` for close, `→` for onward links, and stencilled words in place of pictograms. Where a pictogram is unavoidable (cart, menu, search), use a thin 1.5px line icon in `ink` with square caps, and keep it small. No emoji, no filled glyph icons.

## Logo

There is no final drawn logo yet. Until there is, use the `Lockup` component: VUWANI in `wordmark`, a `brass` threadline with a single loop above it (the needle caught mid-stitch), and the tagline *Style Archive of South African Tailoring* in Bodoni italic. Coal on light grounds, bone on coal, rust on paper. Never stretch, outline, or add effects to it. Keep clear space equal to the height of the V on every side.

## Touchpoints

- **Archive Tag:** a woven `paper` tag inside the breast pocket with the era, fabric, source market, restoration date and garment number.
- **Archive Card:** a library checkout card that comes with every garment, stamped with batch, source and story. It doubles as the loyalty record.
- **Packaging:** raw canvas garment bags with stencilled `stencil-label` type in coal, brass zips, a printed archive card in the pocket.
- **Pop-ups:** exposed brick, steel rails, a velvet curtain in `lining` green, jazz on vinyl, amber light. Signage in stencil.
- **Substack, The Vuwani Archive:** Night Shift theme, Bodoni `hero` headlines, an Archivo `lead`, archive photographs as Plates, cuff buttons as the sign-off.

## Do and don't

- Do let one thing be ornate per view. Don't decorate everything.
- Do name real streets, years and trades. Don't write generic heritage copy.
- Do keep rust rare and brass small. Don't fill backgrounds with either.
- Do set facts in Courier. Don't set prices or measurements in Bodoni.
- Do show the restoration: before, during, after. Don't hide that the clothes are thrifted; the hunt is the story.
- Don't use gradients, glossy effects, gold foil textures on screen, rounded cards or emoji.
