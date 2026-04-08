/* ===== GHAR KA SWAD - Main JS ===== */
/* Edit SITE_DATA below to update items, combos, timings, and testimonials      */

const SITE_DATA = {
  whatsapp_number: "916300315974",
  currency: "$",

  items: [
    {
      id: "chai",
      name: "Masala Chai",
      tagline: "Freshly Brewed",
      description: "A soul-warming cup of spiced Indian tea brewed the traditional way - bold, aromatic, and just right.",
      price: 1.79,
      badge: "Almost Gone",
      contains: "",
      inStock: true,
      image: "assets/chai.jpeg"
    },
    {
      id: "bun-maska",
      name: "Bun Maska",
      tagline: "Soft & Buttery",
      description: "Fluffy homestyle bun generously slathered with creamy butter. Soft on the inside, golden on the outside - a classic done right.",
      price: 2.99,
      badge: "Most Ordered",
      contains: "",
      inStock: true,
      image: "assets/bun_maska.jpeg"
    },
    {
      id: "sponge-cake",
      name: "Sponge Cake",
      tagline: "Light & Fluffy",
      description: "A soft, melt-in-your-mouth sponge cake made from scratch - just like the sweet bun from your childhood.",
      price: 1.79,
      badge: "",
      contains: "egg",
      inStock: true,
      image: "assets/sponge_cake.jpeg"
    },
    {
      id: "tresleches",
      name: "Tres Leches Cake",
      tagline: "Pre-Order Special",
      description: "A delicate three-milk cake soaked in sweet cream and topped with fluffy whipped cream. Moist, rich, and made to order - worth every bite.",
      price: "3.99",
      badge: "",
      contains: "egg",
      inStock: true,
      image: "assets/special.png"
    },
    {
      id: "frenchfries",
      name: "Peri peri French Fries",
      tagline: "Zero Oil. All Crunch.",
      description: "Crispy, golden peri peri fries — air-fried, not deep-fried. All the crunch, none of the guilt. A bold, spicy snack that's hard to stop at one.",
      price: 3.29,
      badge: "",
      contains: "",
      inStock: true,
      image: "assets/french_fries.jpg"
    }
  ],

  combos: [
    {
      id: "combo-1",
      name: "Chai + Bun Maska",
      items: ["Masala Chai", "Bun Maska"],
      price: 4.50,
      original: 4.78,
      badge: "Save $0.28",
      description: "The classic pairing - a hot cup of spiced chai with a soft, buttery bun. Simple, satisfying, and always right.",
      image: "assets/combo_2.png"
    },
    {
      id: "combo-2",
      name: "Chai + Bun Maska + Sponge Cake",
      items: ["Masala Chai", "Bun Maska", "Sponge Cake"],
      price: 5.99,
      original: 6.57,
      badge: "Save $0.58",
      description: "The full homestyle spread - chai, buttery bun, and a slice of fluffy sponge cake. Everything you need for the perfect break.",
      image: "assets/combo.png"
    },
    {
      id: "combo-3",
      name: "Bun Maska + French Fries",
      items: ["Bun Maska", "French Fries"],
      price: 5.99,
      original: 6.28,
      badge: "Save $0.29",
      description: "Soft buttery bun and hot crispy fries — the snack combo that hits every time. Simple, savoury, and completely satisfying.",
      image: "assets/combo_3.png"
    }
  ],

  availability: [
    { day: "Monday",    hours: "11:00 AM - 11:00 PM", open: true  },
    { day: "Tuesday",   hours: "11:00 AM - 11:00 PM", open: true  },
    { day: "Wednesday", hours: "11:00 AM - 9:00 PM",  open: true  },
    { day: "Thursday",  hours: "2:00 PM - 9:00 PM",  open: true },
    { day: "Friday",    hours: "2:00 PM - 9:00 PM",  open: true },
    { day: "Saturday",  hours: "11:00 AM - 11:00 PM",  open: true },
    { day: "Sunday",    hours: "11:00 AM - 11:00 PM", open: true  }
  ],

  coming_soon: [
    {
      name: "Karapusa / Murukulu",
      emoji: "circle",
      description: "Crunchy, spiced, and utterly addictive. Perfect for snacking or sharing at parties. Great for bulk orders.",
      tag: "Bulk-Friendly"
    },
    {
      name: "Egg Puff",
      emoji: "puff",
      description: "Flaky, golden pastry with a spiced egg filling. Crispy on the outside, soft and savoury inside - a classic snack done homestyle.",
      tag: "Best Fresh"
    },
    {
      name: "Atukulu / Bhel Mixture",
      emoji: "bowl",
      description: "A light, flavourful flattened rice mix loaded with crunch and spice. Great as an evening snack, brilliant in bulk.",
      tag: "Bulk-Friendly"
    },
    {
      name: "Brownie + Ice Cream",
      emoji: "dessert",
      description: "Warm homemade brownie paired with a scoop of ice cream. The indulgent combo you didn't know you needed.",
      tag: "Dessert Combo"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Akhil",
      avatar: "A",
      rating: 4.5,
      text: "That chai is something else - every sip takes me straight back to a roadside tapri. Genuine Indian street chai flavour, no compromises.",
      item: "Masala Chai"
    },
    {
      id: 2,
      name: "Sri Ram",
      avatar: "S",
      rating: 5,
      text: "The sponge cake is incredibly fluffy. Took one bite and was instantly reminded of the sweet buns from my school canteen. Pure nostalgia.",
      item: "Sponge Cake"
    },
    {
      id: 3,
      name: "Sindhoora",
      avatar: "H",
      rating: 5,
      text: "Yummyyyy ⭐️⭐️⭐️⭐️⭐️. The bun maska has this perfect balance - not too sweet, just enough butter. Exactly how it should be. Had two and don't regret it.",
      item: "Bun Maska"
    },
    {
      id: 4,
      name: "Surya",
      avatar: "V",
      rating: 5,
      text: "Ordered the combo on a lazy Sunday - chai, bun, and cake. Honestly felt like a home snack. Great value for the price.",
      item: "The Full Set Combo"
    },
    {
      id: 5,
      name: "Akshay",
      avatar: "A",
      rating: 5,
      text: "The chai hits different. Rich, spiced, and perfectly brewed every single time. It's the kind of chai you keep coming back for.",
      item: "Masala Chai"
    }
  ]
};

/* ===== Helpers ===== */
function whatsappLink(number, message) {
  var num = (number || "").replace(/\D/g, "");
  var msg = encodeURIComponent(message || "Hi! I'd like to place an order from Ghar Ka Swad.");
  return "https://wa.me/" + num + "?text=" + msg;
}

var WA_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

/* ===== Build Menu Cards ===== */
function buildMenuCards() {
  var grid = document.getElementById("menu-grid");
  if (!grid) return;

  var wa  = SITE_DATA.whatsapp_number;
  var cur = SITE_DATA.currency || "$";

  grid.innerHTML = SITE_DATA.items.map(function(item) {
    var isCombo  = item.id === "combo";
    var hasPrice = item.price !== "" && item.price !== null && item.price !== undefined;
    var priceStr = hasPrice
      ? cur + Number(item.price).toFixed(2)
      : (item.price_label || "Price on Request");
    var priceClass = hasPrice ? "" : "price-request";

    var stockSet = item.inStock !== undefined;
    var inStock  = item.inStock !== false;

    var badges = [];
    if (stockSet && inStock)           badges.push('<span class="badge badge-instock">In Stock</span>');
    if (stockSet && !inStock)          badges.push('<span class="badge badge-outofstock">Out of Stock</span>');
    if (item.badge === "Combo Offer")  badges.push('<span class="badge badge-combo">Combo</span>');
    if (item.badge === "Pre-Order")    badges.push('<span class="badge badge-preorder">Pre-Order</span>');
    if (item.badge === "Most Ordered") badges.push('<span class="badge badge-popular">Most Ordered</span>');
    if (item.badge === "Almost Gone") badges.push('<span class="badge badge-popular">Almost Gone</span>');
    if (item.contains === "egg")       badges.push('<span class="badge badge-egg">Contains Egg</span>');
    var badgeHTML = badges.length ? '<div class="menu-card-badges">' + badges.join("") + '</div>' : "";

    var orderMsg = "Hi! I'd like to order " + item.name + " from Ghar Ka Swad.";
    var waHref   = whatsappLink(wa, orderMsg);
    var orderBtn = inStock
      ? '<a href="' + waHref + '" target="_blank" rel="noopener" class="menu-card-order">' + WA_SVG + ' Order</a>'
      : '<span class="menu-card-order out-of-stock-btn">Unavailable</span>';

    return '<div class="menu-card' + (isCombo ? " combo-highlight" : "") + (inStock ? "" : " card-oos") + '">'
      + '<img class="menu-card-img" src="' + item.image + '" alt="' + item.name + '" loading="lazy"'
      + ' onerror="this.onerror=null;this.style.background=\'#f0e8dc\';this.style.minHeight=\'200px\';" />'
      + '<div class="menu-card-body">'
      + badgeHTML
      + '<div class="menu-card-tagline">' + item.tagline + '</div>'
      + '<h3 class="menu-card-name">' + item.name + '</h3>'
      + '<p class="menu-card-desc">' + item.description + '</p>'
      + '<div class="menu-card-footer">'
      + '<span class="menu-card-price ' + priceClass + '">' + priceStr + '</span>'
      + orderBtn
      + '</div></div></div>';
  }).join("");
}

/* ===== Build Combos ===== */
function buildCombos() {
  var grid = document.getElementById("combos-grid");
  if (!grid || !SITE_DATA.combos) return;

  var wa  = SITE_DATA.whatsapp_number;
  var cur = SITE_DATA.currency || "$";

  grid.innerHTML = SITE_DATA.combos.map(function(combo) {
    var orderMsg = "Hi! I'd like to order the " + combo.name + " combo from Ghar Ka Swad.";
    var waHref   = whatsappLink(wa, orderMsg);
    var itemTags = combo.items.map(function(i) {
      return '<span class="combo-item-tag">' + i + '</span>';
    }).join("");

    return '<div class="combo-card">'
      + '<img class="combo-card-img" src="' + combo.image + '" alt="' + combo.name + '" loading="lazy"'
      + ' onerror="this.onerror=null;this.style.background=\'#f0e8dc\';this.style.minHeight=\'180px\';" />'
      + '<div class="combo-card-body">'
      + '<div class="combo-save-badge">' + combo.badge + '</div>'
      + '<h3 class="combo-card-name">' + combo.name + '</h3>'
      + '<div class="combo-item-tags">' + itemTags + '</div>'
      + '<p class="combo-card-desc">' + combo.description + '</p>'
      + '<div class="combo-card-footer">'
      + '<div class="combo-pricing">'
      + '<span class="combo-price">' + cur + combo.price.toFixed(2) + '</span>'
      + '<span class="combo-original">' + cur + combo.original.toFixed(2) + '</span>'
      + '</div>'
      + '<a href="' + waHref + '" target="_blank" rel="noopener" class="menu-card-order">' + WA_SVG + ' Order</a>'
      + '</div></div></div>';
  }).join("");
}

/* ===== Build Availability Table ===== */
function buildAvailability() {
  var tbody = document.getElementById("avail-tbody");
  if (!tbody) return;

  tbody.innerHTML = SITE_DATA.availability.map(function(row) {
    var cls    = row.open ? "open"     : "closed";
    var dotCls = row.open ? "dot-open" : "dot-closed";
    return '<tr>'
      + '<td class="day-col">' + row.day + '</td>'
      + '<td class="hours-col ' + cls + '"><span class="dot ' + dotCls + '"></span>' + row.hours + '</td>'
      + '</tr>';
  }).join("");
}

/* ===== Build Coming Soon ===== */
function buildComingSoon() {
  var grid = document.getElementById("coming-grid");
  if (!grid || !SITE_DATA.coming_soon) return;

  grid.innerHTML = SITE_DATA.coming_soon.map(function(item) {
    return '<div class="coming-card">'
      // + '<div class="coming-emoji">' + item.emoji + '</div>'
      // + '<div class="coming-soon-badge">Coming Soon</div>'
      + '<h3 class="coming-name">' + item.name + '</h3>'
      + '<p class="coming-desc">' + item.description + '</p>'
      + '<span class="coming-tag">' + item.tag + '</span>'
      + '</div>';
  }).join("");
}

/* ===== Star rating helper (supports .5) ===== */
function renderStars(rating) {
  var html = "";
  for (var i = 1; i <= 5; i++) {
    if (rating >= i)          html += '<span class="testi-star full">&#9733;</span>';
    else if (rating >= i-0.5) html += '<span class="testi-star half">&#9733;</span>';
    else                      html += '<span class="testi-star empty">&#9733;</span>';
  }
  return html;
}

/* ===== Build Testimonials ===== */
var testiAutoPlay = null;
var testiIndex    = 0;

function buildTestimonials() {
  var track = document.getElementById("testi-track");
  if (!track) return;

  var cards = SITE_DATA.testimonials.map(function(t) {
    var av = t.avatar || t.name.charAt(0).toUpperCase();
    return '<div class="testi-card">'
      + '<div class="testi-stars">' + renderStars(t.rating) + '</div>'
      + '<p class="testi-text">&ldquo;' + t.text + '&rdquo;</p>'
      + '<div class="testi-author">'
      + '<div class="testi-avatar">' + av + '</div>'
      + '<div><div class="testi-name">' + t.name + '</div>'
      + '<div class="testi-item">' + t.item + '</div></div>'
      + '</div></div>';
  }).join("");

  track.innerHTML = cards + cards;
  startAutoScroll();
}

function startAutoScroll() {
  stopAutoScroll();
  testiAutoPlay = setInterval(function() { scrollTesti(1); }, 3500);
}

function stopAutoScroll() {
  if (testiAutoPlay) { clearInterval(testiAutoPlay); testiAutoPlay = null; }
}

function scrollTesti(dir) {
  var track = document.getElementById("testi-track");
  if (!track) return;
  var card      = track.querySelector(".testi-card");
  var cardWidth = card ? card.offsetWidth + 24 : 344;
  var total     = SITE_DATA.testimonials.length;
  testiIndex = (testiIndex + dir + total) % total;
  track.style.transition = "transform 0.45s ease";
  track.style.transform  = "translateX(-" + (testiIndex * cardWidth) + "px)";
  track.addEventListener("transitionend", function onEnd() {
    track.removeEventListener("transitionend", onEnd);
    if (testiIndex === 0 && dir === 1) {
      track.style.transition = "none";
      track.style.transform  = "translateX(0)";
    }
  }, { once: true });
}

function testiPrev() {
  stopAutoScroll();
  scrollTesti(-1);
  setTimeout(startAutoScroll, 6000);
}

function testiNext() {
  stopAutoScroll();
  scrollTesti(1);
  setTimeout(startAutoScroll, 6000);
}

/* ===== WhatsApp links ===== */
function buildWhatsAppLinks() {
  var link = whatsappLink(SITE_DATA.whatsapp_number);
  var els  = document.querySelectorAll("[data-wa]");
  for (var i = 0; i < els.length; i++) { els[i].href = link; }
}

/* ===== Nav shadow on scroll ===== */
function initNavScroll() {
  var nav = document.querySelector("nav");
  if (!nav) return;
  window.addEventListener("scroll", function() {
    nav.style.boxShadow = window.scrollY > 20 ? "0 2px 20px rgba(0,0,0,0.3)" : "none";
  });
}

/* ===== Mobile Nav ===== */
function toggleNav() {
  document.getElementById("nav-links").classList.toggle("open");
  document.getElementById("nav-burger").classList.toggle("open");
}
function closeNav() {
  var links  = document.getElementById("nav-links");
  var burger = document.getElementById("nav-burger");
  if (links)  links.classList.remove("open");
  if (burger) burger.classList.remove("open");
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", function() {
  buildMenuCards();
  buildCombos();
  buildAvailability();
  buildComingSoon();
  buildTestimonials();
  buildWhatsAppLinks();
  initNavScroll();
});