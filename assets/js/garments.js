/*
  The archive. One entry per garment.
  These six are SAMPLE entries to show the layout. Replace them with real pieces as they are restored.
  status: "available" | "reserved" | "sold"
  cloth: a colour for the placeholder plate until photographs exist.
  photos: image paths under assets/img/, first one is the lead image. Leave empty to show the placeholder.
*/
window.VUWANI_ARCHIVE = {
  drop: "Archive 001",
  garments: [
    {
      id: "0417",
      name: "Jeppes Restored Wool Suit",
      batch: "04",
      era: "c. 1974",
      cloth: "Navy chalk-stripe worsted, 340 g",
      clothColour: "#1d2433",
      found: "Dunusa, Bree Street",
      work: "Shoulders rebuilt · relined in green silk · horn buttons",
      lining: "Green silk",
      chest: "104 cm",
      waist: "86 cm · trouser cropped to 98 cm",
      price: 2450,
      status: "available",
      story: "Found in a bale of coats on a Saturday morning. The cloth had outlived its owner and three cupboards. We rebuilt the shoulders, took out a tired polyester lining and put green silk in its place.",
      ledger: [["12.09.2026", "Found · Dunusa"], ["20.09.2026", "Cleaned · hydrocarbon"], ["03.11.2026", "Restored · horn buttons"]],
      photos: []
    },
    {
      id: "0418",
      name: "Selby Three-Piece in Charcoal",
      batch: "04",
      era: "c. 1968",
      cloth: "Charcoal flannel, 380 g",
      clothColour: "#2e2c2a",
      found: "Noord Street market",
      work: "Waistcoat let out · new brass buttons · trousers re-hemmed",
      lining: "Oxblood satin",
      chest: "100 cm",
      waist: "82 cm",
      price: 2950,
      status: "reserved",
      story: "A full three-piece with the waistcoat still pinned to the jacket hanger. Heavy flannel built for winter mornings on the platform.",
      ledger: [["14.09.2026", "Found · Noord Street"], ["22.09.2026", "Cleaned · wet clean"], ["06.11.2026", "Restored · brass buttons"]],
      photos: []
    },
    {
      id: "0419",
      name: "Booysens Double-Breasted",
      batch: "04",
      era: "c. 1979",
      cloth: "Brown pinstripe wool",
      clothColour: "#3b2a1f",
      found: "Germiston market",
      work: "Lapels pick-stitched by hand · sleeves shortened · relined",
      lining: "Rust paisley",
      chest: "108 cm",
      waist: "90 cm",
      price: 2700,
      status: "available",
      story: "Six buttons, peak lapels and a chest that means business. We added hand pick stitching along the lapel edge and a rust paisley lining.",
      ledger: [["18.09.2026", "Found · Germiston"], ["25.09.2026", "Cleaned · hydrocarbon"], ["09.11.2026", "Restored · pick stitch"]],
      photos: []
    },
    {
      id: "0420",
      name: "Newtown Bakery Blazer",
      batch: "04",
      era: "c. 1983",
      cloth: "Oatmeal tweed",
      clothColour: "#6b5f4f",
      found: "Dunusa, Bree Street",
      work: "Elbows patched in suede · horn buttons · pockets reinforced",
      lining: "Bottle green twill",
      chest: "102 cm",
      waist: "",
      price: 1650,
      status: "available",
      story: "A tweed sports jacket that had seen work. We kept the wear and made it stronger: suede elbows, reinforced pockets, horn buttons.",
      ledger: [["21.09.2026", "Found · Dunusa"], ["28.09.2026", "Cleaned · steam"], ["11.11.2026", "Restored · suede elbows"]],
      photos: []
    },
    {
      id: "0421",
      name: "Park Station Overcoat",
      batch: "04",
      era: "c. 1971",
      cloth: "Camel wool and cashmere",
      clothColour: "#7a5a33",
      found: "Estate sale, Kensington",
      work: "Collar re-felted · buttons replaced · hem restored",
      lining: "Coal satin",
      chest: "112 cm",
      waist: "",
      price: 3200,
      status: "sold",
      story: "From a wardrobe that had not been opened since 1990. Camel coats like this one waited on Park Station platforms every winter.",
      ledger: [["02.09.2026", "Found · estate sale"], ["10.09.2026", "Cleaned · hydrocarbon"], ["30.10.2026", "Restored · new collar felt"], ["15.11.2026", "Issued · Inheritor 0112"]],
      photos: []
    },
    {
      id: "0422",
      name: "Jeppestown Grey Two-Piece",
      batch: "04",
      era: "c. 1976",
      cloth: "Mid-grey sharkskin",
      clothColour: "#4a4c50",
      found: "Noord Street market",
      work: "Jacket shortened · waist taken in · relined",
      lining: "Green silk",
      chest: "98 cm",
      waist: "80 cm · trouser cropped to 96 cm",
      price: 2250,
      status: "available",
      story: "Sharkskin catches the light the way it did on Friday nights in 1976. Cut shorter in the jacket and cropped in the trouser for now.",
      ledger: [["23.09.2026", "Found · Noord Street"], ["30.09.2026", "Cleaned · wet clean"], ["12.11.2026", "Restored · relined"]],
      photos: []
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
