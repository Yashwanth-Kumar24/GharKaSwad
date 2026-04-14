/* ===== GHAR KA SWAD - Main JS ===== */
/* Edit SITE_DATA below to update items, combos, timings, and testimonials      */

const SITE_DATA = {
  whatsapp_number: "916300315974",
  currency: "$",
  orders_served: 38,
  items_served: 158,
  items: [
    {
      id: "egg-puff",
      name: "Egg Puff / Veg Puff",
      tagline: "Flaky. Golden. Fresh from the Oven.",
      description: "Crispy, golden pastry fresh from the oven — soft and spiced inside, flaky on the outside. Available in Egg or Veg. Made in small batches, homestyle.",
      price: 3.49,
      badge: "New — Fresh Batch!",
      contains: "egg",
      inStock: true,
      orders_sold: 21,
      image: "assets/egg_puff.jpg"
    },
    {
      id: "borugulu",
      name: "Borugulu Mixture",
      tagline: "Crispy. Spiced. Addictive.",
      description: "Homemade South Indian puffed rice mixture — tossed with roasted peanuts, chickpeas and fresh coriander. Light, crunchy, and dangerously snackable. Perfect with chai.",
      price: 2.99,
      badge: "New — Fresh Batch!",
      contains: "",
      inStock: true,
      orders_sold: 0,
      image: "assets/borugulu.png"
    },
    {
      id: "tresleches",
      name: "Tres Leches Cake",
      tagline: "Pre-Order Only. Limited Slots",
      description: "A delicate three-milk cake soaked in sweet cream and topped with fluffy whipped cream. Moist, rich, and made to order - worth every bite.",
      price: 3.99,
      badge: "",
      contains: "egg",
      inStock: false,
      orders_sold: 14,
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
      orders_sold: 2,
      image: "assets/french_fries.jpg"
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
      orders_sold: 51,
      image: "assets/bun_maska.jpeg"
    },
    {
      id: "chai",
      name: "Masala Chai",
      tagline: "Freshly Brewed",
      description: "A soul-warming cup of spiced Indian tea brewed the traditional way - bold, aromatic, and just right.",
      price: 1.79,
      badge: "Kadak & Pure",
      contains: "",
      inStock: true,
      orders_sold: 43,
      image: "assets/chai.jpeg"
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
      orders_sold: 26,
      image: "assets/sponge_cake.jpeg"
    }
  ],

  combos: [
    {
      id: "combo-5",
      name: "Chai + Egg Puff",
      items: ["Masala Chai", "Egg Puff"],
      price: 4.99,
      original: 5.28,
      badge: "Fresh Pairing • Save $0.29",
      description: "Hot masala chai paired with a fresh-from-the-oven egg/veg puff — flaky, spiced, and perfectly crispy. The kind of combo that hits different on a cold day.",
      image: "assets/combo_5.png"
    },
    {
      id: "combo-4",
      name: "Chai + Borugulu Mixture",
      items: ["Masala Chai", "Borugulu Mixture"],
      price: 4.50,
      original: 4.78,
      badge: "Telugu Evening Special • Save $0.28",
      description: "Hot masala chai paired with crispy homemade borugulu mixture — the classic Telugu evening combo. Light, spiced, and completely satisfying.",
      image: "assets/combo_4.png"
    },
    {
      id: "combo",
      name: "Chai + Bun Maska",
      items: ["Masala Chai", "Bun Maska"],
      price: 4.50,
      original: 4.78,
      badge: "Hyd Classic • Save $0.28",
      description: "The classic pairing - a hot cup of spiced chai with a soft, buttery bun. Simple, satisfying, and always right.",
      image: "assets/combo_2.png"
    },
    {
      id: "combo-2",
      name: "Chai + Bun Maska + Sponge Cake",
      items: ["Masala Chai", "Bun Maska", "Sponge Cake"],
      price: 5.99,
      original: 6.57,
      badge: "Best Seller • Save $0.58",
      description: "The full homestyle spread - chai, buttery bun, and a slice of fluffy sponge cake. Everything you need for the perfect break.",
      image: "assets/combo.png"
    },
    {
      id: "combo-3",
      name: "Bun Maska + French Fries",
      items: ["Bun Maska", "French Fries"],
      price: 5.99,
      original: 6.28,
      badge: "Street Food Vibes • Save $0.29",
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
    // {
    //   name: "Egg Puff",
    //   emoji: "puff",
    //   description: "Flaky, golden pastry with a spiced egg filling. Crispy on the outside, soft and savoury inside - a classic snack done homestyle.",
    //   tag: "Best Fresh"
    // },
    // {
    //   name: "Atukulu / Bhel Mixture",
    //   emoji: "bowl",
    //   description: "A light, flavourful flattened rice mix loaded with crunch and spice. Great as an evening snack, brilliant in bulk.",
    //   tag: "Bulk-Friendly"
    // },
    {
      name: "Borugulu Mixture — Bulk Pack",
      emoji: "bowl",
      description: "Love our mixture? We now take bulk orders for parties and gatherings. Fresh batch, spiced your way.",
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
      name: "Charan",
      avatar: "C",
      rating: 5,
      text: "Ordered bun maska and chai — came back within the hour for 5 bun maskas and 2 chais. Couldn't resist. The whole group ended up hooked.",
      item: "Bun Maska + Masala Chai"
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
      name: "Tejaswini",
      avatar: "T",
      rating: 5,
      text: "The bun maska is pure Hyderabad on a plate — soft, buttery, and exactly how it should be. The peri peri fries hit different too, crispy with just the right kick. Felt like home, honestly.",
      item: "Bun Maska + French Fries"
    },
    {
      id: 6,
      name: "Sri Ram",
      avatar: "S",
      rating: 5,
      text: "The sponge cake is incredibly fluffy. Took one bite and was instantly reminded of the sweet buns from my school canteen. Pure nostalgia.",
      item: "Sponge Cake"
    }
  ]
};

function buildStats() {
  var el = document.getElementById("hero-stats");
  if (!el) return;
  el.innerHTML = '<span class="hero-stat-num">' + SITE_DATA.orders_served + '</span>'
    + '<span class="hero-stat-label"> orders </span> <span class="hero-stat-num">' + SITE_DATA.items_served + '</span>' 
    +  '<span class="hero-stat-label"> items served</span>';
}

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

  // Compute popularity ranks from orders_sold (top 3 only)
  var rankMap = {};
  var sorted = SITE_DATA.items
    .filter(function(i) { return i.orders_sold && i.orders_sold > 2; })
    .slice().sort(function(a, b) { return b.orders_sold - a.orders_sold; });
  sorted.slice(0, 3).forEach(function(item, idx) { rankMap[item.id] = idx + 1; });

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
    if (item.badge === "Almost Gone")  badges.push('<span class="badge badge-popular">Almost Gone</span>');
    if (item.badge === "New — Fresh Batch!") badges.push('<span class="badge badge-new-item">New — Fresh Batch!</span>');
    if (item.badge === "Kadak & Pure")  badges.push('<span class="badge badge-popular">Kadak & Pure</span>');
    if (item.contains === "egg")       badges.push('<span class="badge badge-egg">Contains Egg</span>');
    // Rank badge — top 3 by orders_sold
    if (rankMap[item.id])              badges.push('<span class="badge badge-rank">#' + rankMap[item.id] + ' Seller</span>');
    // New item nudge — 2 or fewer orders
    if (item.orders_sold && item.orders_sold <= 2) badges.push('<span class="badge badge-new-item">New — Try It!</span>');
    var badgeHTML = badges.length ? '<div class="menu-card-badges">' + badges.join("") + '</div>' : "";

    // Orders counter
    var ordersHTML = item.orders_sold && item.orders_sold > 0
      ? '<span class="card-orders-count">' + item.orders_sold + ' ordered</span>'
      : '';

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
      + '<div class="menu-card-price-wrap">'
      + '<span class="menu-card-price ' + priceClass + '">' + priceStr + '</span>'
      + ordersHTML
      + '</div>'
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
  buildStats();
  buildMenuCards();
  buildCombos();
  buildAvailability();
  buildComingSoon();
  buildTestimonials();
  buildWhatsAppLinks();
  initNavScroll();
});
