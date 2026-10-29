/*
  The archive. One entry per garment.
  The six pieces match the outfits in the campaign photographs. Names, cloth and photos describe what is in the pictures.
  Era, source market, measurements, prices, status and the ledger are still SAMPLE values: replace them with the real details.
  status: "available" | "reserved" | "sold"
  cloth: a colour for the placeholder plate until photographs exist.
  photos: image paths under assets/img/, first one is the lead image. Made by tools/make_images.py. Every photo shows the jacket on.
*/
window.VUWANI_ARCHIVE = {
  drop: "Archive 001",
  garments: [
    {
      id: "0417",
      name: "Grey Two-Piece with Satin Trousers",
      batch: "04",
      era: "c. 1974",
      cloth: "Grey wool jacket, charcoal satin trousers",
      clothColour: "#5c5d60",
      found: "Dunusa, Bree Street",
      work: "Shoulders rebuilt · trousers recut wide · horn buttons",
      lining: "Green silk",
      chest: "104 cm",
      waist: "86 cm · trouser cropped to 98 cm",
      price: 2450,
      status: "available",
      story: "A grey single-breasted jacket with the soft, wide shoulder of the late 70s, worn with satin trousers that catch the light. Shot against rusted corrugated iron with a patterned silk scarf where a tie should be.",
      ledger: [["12.09.2026", "Found · Dunusa"], ["20.09.2026", "Cleaned · hydrocarbon"], ["03.11.2026", "Restored · shoulders rebuilt"]],
      photos: ["assets/img/garments/0417-1.webp", "assets/img/garments/0417-2.webp", "assets/img/garments/0417-3.webp"]
    },
    {
      id: "0418",
      name: "Navy Double-Breasted Jacket",
      batch: "04",
      era: "c. 1968",
      cloth: "Navy wool, six-button double-breasted",
      clothColour: "#1d2433",
      found: "Noord Street market",
      work: "Sleeves shortened for a cuff to show · buttons polished · pocket square added",
      lining: "Navy satin",
      chest: "100 cm",
      waist: "82 cm",
      price: 2950,
      status: "reserved",
      story: "Six buttons and a chest that means business. Worn the old way: striped tie, gold tie chain, folded pocket square and a cufflink done up before leaving the house.",
      ledger: [["14.09.2026", "Found · Noord Street"], ["22.09.2026", "Cleaned · wet clean"], ["06.11.2026", "Restored · sleeves shortened"]],
      photos: ["assets/img/garments/0418-1.webp", "assets/img/garments/0418-2.webp"]
    },
    {
      id: "0419",
      name: "Black Textured Sports Jacket",
      batch: "04",
      era: "c. 1979",
      cloth: "Black and charcoal textured weave",
      clothColour: "#232022",
      found: "Germiston market",
      work: "Relined · sleeves shortened · horn buttons fitted",
      lining: "Black satin with red piping",
      chest: "108 cm",
      waist: "90 cm",
      price: 2700,
      status: "available",
      story: "A textured black jacket that reads as plain from across the street and rich up close. Worn with a pale blue shirt, red tie and brown pleated trousers.",
      ledger: [["18.09.2026", "Found · Germiston"], ["25.09.2026", "Cleaned · hydrocarbon"], ["09.11.2026", "Restored · relined"]],
      photos: ["assets/img/garments/0419-1.webp", "assets/img/garments/0419-2.webp", "assets/img/garments/0419-3.webp"]
    },
    {
      id: "0420",
      name: "Olive Overcoat with Checked Lining",
      batch: "04",
      era: "c. 1983",
      cloth: "Olive wool overcoat, checked lining",
      clothColour: "#4a4a26",
      found: "Dunusa, Bree Street",
      work: "Collar re-felted · lining repaired · buttons replaced",
      lining: "Original check",
      chest: "102 cm",
      waist: "",
      price: 1650,
      status: "available",
      story: "A long olive overcoat with its original checked lining, worn over a waistcoat with a watch chain and wide brown trousers. The kind of coat that waited on Park Station platforms every winter.",
      ledger: [["21.09.2026", "Found · Dunusa"], ["28.09.2026", "Cleaned · steam"], ["11.11.2026", "Restored · collar re-felted"]],
      photos: ["assets/img/garments/0420-1.webp", "assets/img/garments/0420-2.webp", "assets/img/garments/0420-3.webp"]
    },
    {
      id: "0421",
      name: "Brown Check Sports Jacket",
      batch: "04",
      era: "c. 1971",
      cloth: "Brown wool with a blue windowpane check",
      clothColour: "#6b5a35",
      found: "Estate sale, Kensington",
      work: "Elbows reinforced · horn buttons · pockets restitched",
      lining: "Bottle green twill",
      chest: "112 cm",
      waist: "",
      price: 3200,
      status: "sold",
      story: "Brown wool with a fine blue windowpane check. Worn with a black shirt, a bright silk tie and pleated stone trousers.",
      ledger: [["02.09.2026", "Found · estate sale"], ["10.09.2026", "Cleaned · hydrocarbon"], ["30.10.2026", "Restored · elbows reinforced"], ["15.11.2026", "Issued · Inheritor 0112"]],
      photos: ["assets/img/garments/0421-1.webp", "assets/img/garments/0421-2.webp", "assets/img/garments/0421-3.webp"]
    },
    {
      id: "0422",
      name: "Navy Blazer and Pinstripe Trousers",
      batch: "04",
      era: "c. 1976",
      cloth: "Navy wool blazer, black pinstripe trousers",
      clothColour: "#1f2d55",
      found: "Noord Street market",
      work: "Blazer taken in · trousers re-hemmed · relined",
      lining: "Green silk",
      chest: "98 cm",
      waist: "80 cm · trouser cropped to 96 cm",
      price: 2250,
      status: "available",
      story: "A navy blazer against a pair of black pinstripe trousers, with a green and gold silk scarf knotted like a tie. Old pieces, worn like new ones.",
      ledger: [["23.09.2026", "Found · Noord Street"], ["30.09.2026", "Cleaned · wet clean"], ["12.11.2026", "Restored · relined"]],
      photos: ["assets/img/garments/0422-1.webp", "assets/img/garments/0422-2.webp", "assets/img/garments/0422-3.webp"]
    }
  ]
};

window.VUWANI = {
  rand(n) {
    return "R " + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  },
  statusLabel: { available: "Available", reserved: "Reserved", sold: "Sold" },
  esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  },
  plate(g, caption, i = 0) {
    const e = this.esc.bind(this);
    const photo = g.photos && g.photos[i];
    const inner = photo
      ? `<img src="${e(photo)}" alt="${e(g.name)}" loading="lazy">`
      : `<div class="plate-fill cloth" style="--cloth:${e(g.clothColour)}"><span>PHOTOGRAPH TO COME</span></div>`;
    return `<figure class="vw-plate"><div class="vw-plate-frame${i === 0 ? " vw-plate-bracket" : ""}">${inner}</div>${caption}</figure>`;
  },
  card(g) {
    const e = this.esc.bind(this);
    const stamp = g.status === "available" ? "" : `<span class="vw-stamp ${g.status === "sold" ? "vw-stamp-sold" : "vw-stamp-ink"}">${this.statusLabel[g.status]}</span>`;
    const cap = `<figcaption><b>NO. ${e(g.id)}</b><span>${e(g.era.toUpperCase())}</span></figcaption>`;
    return `<a class="item" href="garment.html?id=${e(g.id)}">${this.plate(g, cap)}<h3 class="item-name">${e(g.name)}</h3><div class="item-meta"><span>${e(g.found)}</span><b>${g.status === "sold" ? "Gone home" : this.rand(g.price)}</b></div>${stamp}</a>`;
  }
};
