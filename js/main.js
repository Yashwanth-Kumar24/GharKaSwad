/* ===== GHAR KA SWAD — Main JS ===== */
/* Edit SITE_DATA below to update menu items, prices, timings, and testimonials */
/* This file is the single source of truth — no need to edit the data folder    */

const SITE_DATA = {
  whatsapp_number: "YOUR_NUMBER_HERE", // e.g. "919876543210" — no + or spaces
  currency: "$",

  items: [
    {
      id: "chai",
      name: "Masala Chai",
      tagline: "Freshly Brewed",
      description: "A soul-warming cup of spiced Indian tea brewed the traditional way — bold, aromatic, and just right.",
      price: 1.79,
      badge: "",
      contains: "",
      image: "assets/chai.jpeg"
    },
    {
      id: "bun-maska",
      name: "Bun Maska",
      tagline: "Soft & Buttery",
      description: "Fluffy homestyle bun generously slathered with creamy butter. The perfect companion to your chai.",
      price: 2.99,
      badge: "",
      contains: "",
      image: "assets/bun_maska.jpeg"
    },
    {
      id: "sponge-cake",
      name: "Sponge Cake",
      tagline: "Light & Fluffy",
      description: "A soft, melt-in-your-mouth sponge cake made from scratch — just like the sweet bun from your childhood.",
      price: 1.79,
      badge: "Contains Egg",
      contains: "egg",
      image: "assets/sponge_cake.jpeg"
    },
    {
      id: "combo",
      name: "The Full Set",
      tagline: "Best Value ⭐",
      description: "Chai + Bun Maska + Sponge Cake. Everything you need in one go. The ultimate homestyle combo.",
      price: 5.99,
      badge: "Combo Offer",
      contains: "egg",
      image: "assets/combo.png"
    },
    {
      id: "custom",
      name: "Custom Desserts",
      tagline: "Made to Order",
      description: "Cakes and desserts crafted for your special moments. Pre-order with us on WhatsApp and we'll make it happen.",
      price: "",
      price_label: "Price on Request",
      badge: "Pre-Order",
      contains: "",
      image: "assets/special.png"
    }
  ],

  availability: [
    { day: "Monday",    hours: "11:00 AM – 11:00 PM", open: true  },
    { day: "Tuesday",   hours: "11:00 AM – 11:00 PM", open: true  },
    { day: "Wednesday", hours: "11:00 AM – 5:00 PM",  open: true  },
    { day: "Thursday",  hours: "Closed",              open: false },
    { day: "Friday",    hours: "Closed",              open: false },
    { day: "Saturday",  hours: "Closed",              open: false },
    { day: "Sunday",    hours: "11:00 AM – 11:00 PM", open: true  }
  ],

  testimonials: [
    {
      id: 1,
      name: "Akhil",
      avatar: "A",
      rating: 4.5,
      text: "That chai is something else — every sip takes me straight back to a roadside tapri. Genuine Indian street chai flavour, no compromises.",
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
      name: "Harsha",
      avatar: "H",
      rating: 5,
      text: "The bun maska has this perfect balance — not too sweet, just enough butter. Exactly how it should be. Had two and don't regret it.",
      item: "Bun Maska"
    },
    {
      id: 4,
      name: "Vikram K.",
      avatar: "V",
      rating: 5,
      text: "Ordered the combo on a lazy Sunday — chai, bun, and cake. Honestly felt like a home snack. Great value for the price.",
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
  const num = (number || "").replace(/\D/g, "");
  const msg = encodeURIComponent(message || "Hi! I'd like to place an order from Ghar Ka Swad.");
  return `https://wa.me/${+916300315974}?text=${msg}`;
}

/* ===== Build Menu Cards ===== */
function buildMenuCards() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  const wa  = SITE_DATA.whatsapp_number;
  const cur = SITE_DATA.currency || "$";

  grid.innerHTML = SITE_DATA.items.map(item => {
    const isCombo = item.id === "combo";
    const hasPrice = item.price !== "" && item.price !== null && item.price !== undefined;
    const priceStr = hasPrice
      ? `${cur}${Number(item.price).toFixed(2)}`
      : (item.price_label || "Price on Request");
    const priceClass = hasPrice ? "" : "price-request";

    const badges = [];
    if (item.badge === "Combo Offer")  badges.push('<span class="badge badge-combo">Combo</span>');
    if (item.badge === "Pre-Order")    badges.push('<span class="badge badge-preorder">Pre-Order</span>');
    if (item.contains === "egg")       badges.push('<span class="badge badge-egg">Contains Egg</span>');
    const badgeHTML = badges.length
      ? `<div class="menu-card-badges">${badges.join("")}</div>` : "";

    const orderMsg = `Hi! I'd like to order ${item.name} from Ghar Ka Swad.`;

    return `
      <div class="menu-card${isCombo ? " combo-highlight" : ""}">
        <img class="menu-card-img" src="${item.image}" alt="${item.name}" loading="lazy"
          onerror="this.onerror=null;this.style.background='#f0e8dc';this.style.minHeight='200px';" />
        <div class="menu-card-body">
          ${badgeHTML}
          <div class="menu-card-tagline">${item.tagline}</div>
          <h3 class="menu-card-name">${item.name}</h3>
          <p class="menu-card-desc">${item.description}</p>
          <div class="menu-card-footer">
            <span class="menu-card-price ${priceClass}">${priceStr}</span>
            <a href="${whatsappLink(wa, orderMsg)}" target="_blank" rel="noopener" class="menu-card-order">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ===== Build Availability Table ===== */
function buildAvailability() {
  const tbody = document.getElementById("avail-tbody");
  if (!tbody) return;

  tbody.innerHTML = SITE_DATA.availability.map(row => {
    const cls    = row.open ? "open"     : "closed";
    const dotCls = row.open ? "dot-open" : "dot-closed";
    return `
      <tr>
        <td class="day-col">${row.day}</td>
        <td class="hours-col ${cls}">
          <span class="dot ${dotCls}"></span>${row.hours}
        </td>
      </tr>
    `;
  }).join("");
}

/* ===== Star rating helper (supports .5) ===== */
function renderStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      html += '<span class="testi-star full">★</span>';
    } else if (rating >= i - 0.5) {
      html += '<span class="testi-star half">★</span>';
    } else {
      html += '<span class="testi-star empty">★</span>';
    }
  }
  return html;
}

/* ===== Build Testimonials (auto-scroll + prev/next) ===== */
let testiAutoPlay = null;
let testiIndex    = 0;

function buildTestimonials() {
  const track = document.getElementById("testi-track");
  if (!track) return;

  const cards = SITE_DATA.testimonials.map(t => {
    const avatarLetter = t.avatar || t.name.charAt(0).toUpperCase();
    return `
      <div class="testi-card">
        <div class="testi-stars">${renderStars(t.rating)}</div>
        <p class="testi-text">"${t.text}"</p>
        <div class="testi-author">
          <div class="testi-avatar">${avatarLetter}</div>
          <div>
            <div class="testi-name">${t.name}</div>
            <div class="testi-item">${t.item}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Duplicate for seamless infinite loop
  track.innerHTML = cards + cards;

  startAutoScroll();
}

function startAutoScroll() {
  stopAutoScroll();
  testiAutoPlay = setInterval(() => scrollTesti(1), 3500);
}

function stopAutoScroll() {
  if (testiAutoPlay) { clearInterval(testiAutoPlay); testiAutoPlay = null; }
}

function scrollTesti(dir) {
  const track = document.getElementById("testi-track");
  if (!track) return;

  const cardWidth = track.querySelector(".testi-card")?.offsetWidth + 24 || 344; // card + gap
  const total     = SITE_DATA.testimonials.length;

  testiIndex = (testiIndex + dir + total) % total;
  track.style.transition = "transform 0.45s ease";
  track.style.transform  = `translateX(-${testiIndex * cardWidth}px)`;

  // Reset to duplicate set when we reach the end to keep it seamless
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
  setTimeout(startAutoScroll, 6000); // restart after 6s idle
}

function testiNext() {
  stopAutoScroll();
  scrollTesti(1);
  setTimeout(startAutoScroll, 6000);
}

/* ===== Wire up all WhatsApp links ===== */
function buildWhatsAppLinks() {
  const link = whatsappLink(SITE_DATA.whatsapp_number);
  document.querySelectorAll("[data-wa]").forEach(el => { el.href = link; });
}

/* ===== Nav shadow on scroll ===== */
function initNavScroll() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.style.boxShadow = window.scrollY > 20
      ? "0 2px 20px rgba(0,0,0,0.3)" : "none";
  });
}

/* ===== Mobile Nav Toggle ===== */
function toggleNav() {
  const links  = document.getElementById("nav-links");
  const burger = document.getElementById("nav-burger");
  links.classList.toggle("open");
  burger.classList.toggle("open");
}
function closeNav() {
  document.getElementById("nav-links")?.classList.remove("open");
  document.getElementById("nav-burger")?.classList.remove("open");
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  buildMenuCards();
  buildAvailability();
  buildTestimonials();
  buildWhatsAppLinks();
  initNavScroll();
});