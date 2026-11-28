"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

type MenuDish = {
  category: string;
  name: string;
  tag: string;
  description: string;
};

const thaliCards = [
  {
    image: "/images/reference/mutton-thali.jpg",
    alt: "Mutton thali",
    title: "Mutton Thali",
    description: "Slow-cooked mutton, both rassas, bhakri, rice, sol kadhi and every little bowl that matters.",
  },
  {
    image: "/images/reference/fish-fry-thali.jpg",
    alt: "Fish fry thali",
    title: "Fish Fry Thali",
    description: "Crisp-fried fish with red gravy, tambda rassa and a spread that stays loud till the last bite.",
  },
  {
    image: "/images/reference/sukka-chicken.jpg",
    alt: "Mutton served on black plate",
    title: "Sukka Chicken",
    description: "Dry-roasted, green-herb finished, bone-in. Straight off the fire, onto your plate.",
  },
];

const featuredDishes = [
  {
    image: thaliCards[0].image,
    alt: "Sainik Special Thali",
    badge: "MOST POPULAR",
    title: "Sainik Special Thali",
    description: "Hearty full meal with signature rassa, bhakri, rice, chutney & fresh salad.",
  },
  {
    image: thaliCards[2].image,
    alt: "Kolhapuri Sukka Chicken",
    badge: "CHIKHALI FAVOURITE",
    title: "Kolhapuri Sukka Chicken",
    description: "Rich, spicy roasted Kolhapuri spices, succulent chicken & aromatic bhakri bread.",
  },
];

const menuDishes: MenuDish[] = [
  {
    category: "Thalis & Special Feasts",
    name: "Sainik Special Thali",
    tag: "MOST POPULAR",
    description: "Hearty full meal with signature rassa, bhakri, rice, chutney & fresh salad.",
  },
  {
    category: "Maharashtrian Specialities",
    name: "Kolhapuri Sukka Chicken",
    tag: "CHIKHALI FAVOURITE",
    description: "Rich, spicy roasted Kolhapuri spices, succulent chicken & aromatic bhakri bread.",
  },
  {
    category: "Maharashtrian Specialities",
    name: "Tambda Pandhra Rassa Bowl",
    tag: "TRADITIONAL BOWL",
    description: "Authentic Kolhapuri red spicy soup & soothing white coconut milk broth.",
  },
  {
    category: "Chinese Wok & Starters",
    name: "Wok-Fired Hakka & Paneer Chilli",
    tag: "CHINESE SPECIAL",
    description: "Tossed over high flame with fresh greens, sizzling paneer chunks & secret house sauce.",
  },
  {
    category: "Chinese Wok & Starters",
    name: "Veg Manchurian Gravy",
    tag: "SPICY & TANGY",
    description: "Crispy vegetable balls simmered in tangy spicy Indo-Chinese dark sauce.",
  },
  {
    category: "North Indian Curries & Breads",
    name: "Paneer Butter Masala & Naan",
    tag: "CHEF RECOMMENDATION",
    description: "Creamy tomato gravy with fresh paneer cubes and hot butter garlic naan.",
  },
  {
    category: "North Indian Curries & Breads",
    name: "Dhaba Dal Tadka",
    tag: "COMFORT FOOD",
    description: "Slow-cooked yellow lentils tempered with garlic, ghee & dried red chillies.",
  },
  {
    category: "Snacks & Refreshments",
    name: "Crispy Kanda Bhajji & Cutting Chai",
    tag: "EVENING SPECIAL",
    description: "Crispy fried sliced onion fritters paired with boiling hot spiced tea in glasses.",
  },
  {
    category: "Beverages & Coolers",
    name: "Chilled Kokum Solkadhi",
    tag: "COOL DIGESTIVE",
    description: "Refreshing pink kokum juice infused with garlic, chilli & coconut milk.",
  },
];

const anatomyStops = [
  ["Mutton", "Bone-in mutton, slow-cooked until it lets go of the bone. The star of the plate."],
  ["Bhakri / Roti", "Rustic flatbread — your edible spoon for scooping every last drop."],
  ["Tambda Rassa", "The red, spicy, unlimited-in-spirit gravy. Sip it, pour it, respect it."],
  ["Rice & Sides", "Soft rice and crumbly sides to soak up the gravies."],
  ["Sol Kadhi", "Pink, tangy kokum-coconut cooler. The fire extinguisher of the thali."],
  ["Dal & Kadhi", "Mellow bowls to balance the heat between bites."],
];

const heatLevels = [
  ["Mild & Sweet", "Tell the kitchen to go easy. Flavour first, fire later.", "#1e4a2b"],
  ["Warm-up", "A gentle tingle. Perfect for first-timers and kids.", "#6b4a0c"],
  ["Kolhapuri Standard", "The honest, proper heat. This is how it’s meant to be.", "#7a1a10"],
  ["Jhanjhanit", "Sweat on the forehead. Tissues nearby. Smile through it.", "#a3140f"],
  ["Sainik Special", "Full battle mode. Order sol kadhi before you start.", "#c4090d"],
];

const galleryImages = [
  {
    image: "/images/reference/friends-sharing-thalis.jpg",
    alt: "Friends sharing thalis",
    caption: "Brothers-in-arms, one thali each",
  },
  {
    image: "/images/reference/family-table.jpg",
    alt: "Family at long table",
    caption: "Family lunch, Sainik style",
  },
  {
    image: "/images/reference/fish-thali-extra-rassa.jpg",
    alt: "Fish thali with extra bowl",
    caption: "Fish thali + extra rassa",
  },
  {
    image: "/images/reference/friends-at-table.jpg",
    alt: "Group of friends at the table",
    caption: "The Sunday gang",
  },
  {
    image: "/images/reference/family-with-kids.jpg",
    alt: "Family with kids eating",
    caption: "Three generations, one table",
  },
  {
    image: "/images/reference/mutton-thali-top.jpg",
    alt: "Mutton thali top view",
    caption: "The plate that started it all",
  },
];

const heroImages = [
  thaliCards[0].image,
  thaliCards[1].image,
  thaliCards[2].image,
  galleryImages[5].image,
];

const categoryNames = ["All", ...new Set(menuDishes.map((dish) => dish.category))];

function getLiveStatus(): { isOpen: boolean; message: string } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
    timeZone: "Asia/Kolkata",
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  const now = hour * 60 + minute;
  const isOpen = (now >= 660 && now < 960) || (now >= 1140 && now < 1380);

  if (isOpen) return { isOpen, message: "● Open now" };
  return {
    isOpen,
    message: `● Closed · opens ${now >= 960 && now < 1140 ? "7 PM" : "11 AM"}`,
  };
}

export default function SainikExperience() {
  const [preloaderHidden, setPreloaderHidden] = useState(false);
  const [heroImage, setHeroImage] = useState(0);
  const [liveStatus, setLiveStatus] = useState({ isOpen: false, message: "● Closed" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAnatomy, setActiveAnatomy] = useState(2);
  const [heatValue, setHeatValue] = useState(3);
  const glowRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const emberRef = useRef<HTMLCanvasElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const visibleDishes = menuDishes.filter(
    (dish) => activeCategory === "All" || dish.category === activeCategory,
  );
  const visibleCategories = [...new Set(visibleDishes.map((dish) => dish.category))];

  useEffect(() => {
    const timer = window.setTimeout(() => setPreloaderHidden(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateStatus = () => setLiveStatus(getLiveStatus());
    const timer = window.setTimeout(updateStatus, 0);
    const interval = window.setInterval(updateStatus, 60_000);
    return () => {
      window.clearTimeout(timer);
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(
      () => setHeroImage((index) => (index + 1) % heroImages.length),
      5000,
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const glow = glowRef.current;
    const background = backgroundRef.current;
    const onPointerMove = (event: PointerEvent) => {
      if (glow) {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }
    };
    const onScroll = () => {
      if (background) {
        background.style.transform = `translateY(${Math.min(window.scrollY, 900) * 0.12}px)`;
      }
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".rv");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element, index) => {
      (element as HTMLElement).style.transitionDelay = `${(index % 3) * 90}ms`;
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const canScrollLeft = gallery.scrollLeft > 0;
      const canScrollRight = gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth - 1;
      if ((event.deltaY < 0 && !canScrollLeft) || (event.deltaY > 0 && !canScrollRight)) return;

      const delta = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? event.deltaY * 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? event.deltaY * gallery.clientWidth
          : event.deltaY;
      event.preventDefault();
      gallery.scrollLeft += delta;
    };

    gallery.addEventListener("wheel", handleWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const canvas = emberRef.current;
    const context = canvas?.getContext("2d");
    const hero = canvas?.parentElement;
    if (!canvas || !context || !hero) return;

    type Ember = { x: number; y: number; radius: number; speed: number; phase: number; alpha: number; color: string };
    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Ember[] = [];

    const resize = () => {
      width = canvas.width = hero.offsetWidth;
      height = canvas.height = hero.offsetHeight;
      particles = Array.from({ length: 70 }, () => createParticle(true));
    };
    const createParticle = (anywhere: boolean): Ember => ({
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : height + 10,
      radius: Math.random() * 2.6 + 0.6,
      speed: Math.random() * 0.9 + 0.35,
      phase: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.7 + 0.3,
      color: Math.random() < 0.35 ? "255,184,28" : "255,106,31",
    });
    const draw = () => {
      if (window.scrollY < window.innerHeight * 1.2) {
        context.clearRect(0, 0, width, height);
        context.globalCompositeOperation = "lighter";
        particles.forEach((particle, index) => {
          particle.y -= particle.speed;
          particle.phase += 0.02;
          particle.x += Math.sin(particle.phase) * 0.5;
          particle.alpha -= 0.0012;
          if (particle.y < -10 || particle.alpha <= 0) {
            particles[index] = createParticle(false);
            return;
          }
          const gradient = context.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius * 5,
          );
          gradient.addColorStop(0, `rgba(${particle.color},${particle.alpha})`);
          gradient.addColorStop(1, `rgba(${particle.color},0)`);
          context.fillStyle = gradient;
          context.beginPath();
          context.arc(particle.x, particle.y, particle.radius * 5, 0, Math.PI * 2);
          context.fill();
        });
      }
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleCardPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };

  return (
    <main>
      <div id="pre" className={preloaderHidden ? "go" : ""} aria-hidden="true">
        <div className="in">
          <Image src="/images/reference/logo.jpg" alt="" width={120} height={120} priority />
          <b>FIRING UP THE TAWA…</b>
        </div>
      </div>

      <div id="glow" ref={glowRef} aria-hidden="true" />

      <nav aria-label="Main navigation">
        <a href="#top" className="logo"><i />Sainik Hotel</a>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#thalis">Thalis</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#heat">Heat</a></li>
          <li><a href="#tables">Tables</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#visit">Visit</a></li>
        </ul>
        <a className="btn" href="#visit" style={{ padding: "10px 20px", fontSize: 14 }}>Find us</a>
      </nav>

      <header className="hero2" id="top">
        <div className="hbg" id="hbg" ref={backgroundRef} aria-hidden="true">
          {heroImages.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className={heroImage === index ? "on" : ""}
            />
          ))}
        </div>
        <canvas id="em" ref={emberRef} aria-hidden="true" />
        <div className="hov" />
        <div className="hc">
          <div className="hk">चिखली · पिंपरी-चिंचवड</div>
          <h1 className="h1"><span className="o">सैनिक</span><span className="f">हॉटेल</span></h1>
          <p className="hp">Mutton that fights back. Fish that sizzles. Two rassas that argue on your plate — one red, one white. Eat like you’ve earned it.</p>
          <div className="cta">
            <a className="btn" href="#menu">View menu →</a>
            <a className="btn ghost" href="tel:08811994491">Call 088119 94491</a>
          </div>
        </div>
        <div className="hbar">
          <span id="live" className={liveStatus.isOpen ? "on" : "off"}>{liveStatus.message}</span>
          <span>★ 4.1 · 195+ Google reviews</span>
          <span className="hx">₹200–400 / person</span>
          <span className="hx">Near Thermax Chowk</span>
          <span className="hx">Scroll ↓</span>
        </div>
      </header>

      <div className="mq" aria-label="Kolhapuri specials">
        <div>
          {[
            "झणझणीत मटण थाळी", "Mutton Thali", "तांबडा रस्सा", "Fish Fry", "पांढरा रस्सा", "Sol Kadhi",
            "झणझणीत मटण थाळी", "Mutton Thali", "तांबडा रस्सा", "Fish Fry", "पांढरा रस्सा", "Sol Kadhi",
          ].map((text, index) => <span key={index}>{text}</span>)}
        </div>
      </div>

      <section id="about">
        <div className="wrap ab">
          <div className="eyebrow rv"><i className="dt" />Chikhali · Pimpri-Chinchwad</div>
          <h2 className="rv">A place to <em>eat well.</em></h2>
          <p className="rv">From sizzling Kolhapuri thalis to late-night outdoor dining, Sainik Hotel brings you the rich culture of Pune roadside hotels without the premium price tag.</p>
          <p className="rv">Sainik Hotel isn’t just a place to eat; it’s a Chikhali landmark where roadside Dhaba character meets generous Maharashtrian hospitality. Serving workers, travelers, and local families every single day.</p>
          <figure className="apic rv">
            <Image src="/images/reference/family-table.jpg" alt="Families sharing a meal at Sainik Hotel" fill sizes="(max-width: 860px) 90vw, 40vw" />
            <figcaption>Every table, every day</figcaption>
          </figure>
          <div className="facts rv">
            <div className="f1"><b>Avg cost</b><span>₹200–400 / Person</span></div>
            <div className="f2"><b>Rating</b><span>4.1 ★ (195+ Reviews)</span></div>
          </div>
        </div>
      </section>

      <section id="perks">
        <div className="wrap">
          <div className="eyebrow rv">Why people keep coming back</div>
          <h2 className="rv">Built for <em>appetites.</em></h2>
          <div className="pk">
            <div className="rv"><i>₹</i><h3>Affordable Meals</h3><p>₹200–400 per person for a wholesome feast. Quality dining without breaking the bank.</p></div>
            <div className="rv"><i>🍽️</i><h3>Generous Portions</h3><p>Full Maharashtrian &amp; North Indian plates crafted to satisfy serious appetites.</p></div>
            <div className="rv"><i>🌙</i><h3>Outdoor Seating</h3><p>Enjoy your dinner under warm lights in our roadside open-air dining section.</p></div>
            <div className="rv"><i>♾️</i><h3>All You Can Eat</h3><p>Generous thali refills of rassa, curry, bhakri &amp; rice cooked with local warmth.</p></div>
            <div className="rv"><i>🛵</i><h3>Quick Delivery</h3><p>Hot meal delivery available in Chikhali (7:00 PM – 8:30 PM shift).</p></div>
            <div className="rv"><i>👪</i><h3>Family Friendly</h3><p>Welcoming seating for family gatherings, friends &amp; local work crews.</p></div>
          </div>
        </div>
      </section>

      <section id="thalis">
        <div className="wrap">
          <div className="eyebrow rv">The plates</div>
          <h2 className="rv">One steel plate.<br /><em>Ten</em> bowls of trouble.</h2>
          <div className="cards">
            {thaliCards.map((dish, index) => (
              <article
                className="card rv"
                key={dish.title}
                onPointerMove={handleCardPointerMove}
                onPointerLeave={(event) => { event.currentTarget.style.transform = ""; }}
              >
                <Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 860px) 90vw, 30vw" />
                <div className="t">
                  <div className="no">0{index + 1}</div>
                  <h3>{dish.title}</h3>
                  <p>{dish.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu">
        <div className="wrap">
          <div className="eyebrow rv">The menu</div>
          <h2 className="rv">Most <em>popular</em></h2>
          <div className="feat">
            {featuredDishes.map((dish) => (
              <article className="fc rv" key={dish.title}>
                <Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
                <div className="in">
                  <span className="badge">{dish.badge}</span>
                  <h3>{dish.title}</h3>
                  <p>{dish.description}</p>
                  <div className="row2"><span className="pr">₹200–400</span><a className="ord" href="tel:08811994491">ORDER →</a></div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt" id="mt" aria-label="Filter menu by category">
            {categoryNames.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "on" : ""}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
          <div id="ml" aria-live="polite">
            {visibleCategories.map((category) => (
              <div key={category}>
                <div className="mc">{category}<small>FRESH PREPARATION</small></div>
                {visibleDishes.filter((dish) => dish.category === category).map((dish) => (
                  <article className="mi" key={dish.name}>
                    <div><span className="tg">{dish.tag}</span><h4>{dish.name}</h4></div>
                    <div className="rt"><span className="pr" style={{ fontSize: 24 }}>₹200–400</span><a className="ord" href="tel:08811994491">ORDER →</a></div>
                    <p>{dish.description}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
          <div className="daily rv">
            <div><b>DAILY SPECIALS BOARD</b><h3>Looking for today’s rotating thali?</h3><p>Call Sainik Hotel directly for daily specials and instant takeaway packages.</p></div>
            <a className="btn" href="tel:08811994491">CALL 088119 94491</a>
          </div>
        </div>
      </section>

      <section id="anat">
        <div className="wrap anat">
          <div className="hs rv" id="hs">
            <Image src="/images/reference/thali-anatomy.jpg" alt="Thali anatomy" width={900} height={675} sizes="(max-width: 860px) 100vw, 45vw" />
            {[["23%", "26%"], ["71%", "20%"], ["51%", "46%"], ["22%", "60%"], ["79%", "70%"], ["58%", "83%"]].map(([left, top], index) => (
              <button
                className={`dot ${activeAnatomy === index ? "on" : ""}`}
                style={{ left, top }}
                data-i={index}
                key={index}
                onClick={() => setActiveAnatomy(index)}
                aria-label={`Show ${anatomyStops[index][0]}`}
                aria-pressed={activeAnatomy === index}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="rv">
            <div className="eyebrow">Anatomy of a thali</div>
            <h2 style={{ fontSize: "clamp(36px,5vw,64px)" }}>Tap a <em>dot</em>.</h2>
            <div className="info" aria-live="polite"><h3>{anatomyStops[activeAnatomy][0]}</h3><p>{anatomyStops[activeAnatomy][1]}</p></div>
            <div className="hint">↑ 6 STOPS · EAT THEM IN ANY ORDER</div>
          </div>
        </div>
      </section>

      <section id="heat" style={{ "--hc": heatLevels[heatValue - 1][2] } as CSSProperties}>
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: "center" }}>How brave are you?</div>
          <h2>Heat <em>meter</em></h2>
          <div className="hm" id="hm" aria-hidden="true">
            {heatLevels.map((_, index) => <i className={index < heatValue ? "on" : ""} key={index}>🌶️</i>)}
          </div>
          <input type="range" id="rg" min="1" max="5" value={heatValue} onChange={(event) => setHeatValue(Number(event.target.value))} aria-label="Spice level" />
          <div id="hl" aria-live="polite">{heatLevels[heatValue - 1][0]}</div>
          <p id="hs2">{heatLevels[heatValue - 1][1]}</p>
        </div>
      </section>

      <section id="tables">
        <div className="wrap"><div className="eyebrow rv">Full house, every day</div><h2 className="rv">Tables of <em>regulars</em></h2></div>
        <div className="strip" ref={galleryRef} tabIndex={0} aria-label="Photo gallery. Scroll horizontally to view more photos.">
          {galleryImages.map((image) => (
            <figure key={image.alt}>
              <div className="gallery-photo">
                <Image src={image.image} alt={image.alt} fill sizes="(max-width: 860px) 68vw, 430px" loading="lazy" />
              </div>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="reviews">
        <div className="wrap">
          <div className="eyebrow rv">Guest experiences</div>
          <div className="rvh">
            <h2 className="rv">Customer <em>feedback</em></h2>
            <div className="big rv"><b>4.1</b><span>OUT OF 5<br />195+ Google reviews</span></div>
          </div>
          <div className="rg2">
            <blockquote className="rv"><small>AFFORDABLE FOOD</small>“Good place for tasty and affordable food.”<cite>Local Guide Diner · 2 weeks ago</cite></blockquote>
            <blockquote className="rv"><small>CHINESE FAVORITE</small>“A perfect choice for a Chinese meal!”<cite>Chikhali Food Explorer · 1 month ago</cite></blockquote>
            <blockquote className="rv"><small>GREAT SERVICE</small>“Decent service with courteous staff.”<cite>Regular Patron · 3 weeks ago</cite></blockquote>
            <blockquote className="rv"><small>BIG PORTIONS</small>“Generous portions, outdoor seating, and authentic roadside atmosphere. Excellent value in ₹200-400 budget!”<cite>Pimpri Resident · 2 months ago</cite></blockquote>
          </div>
        </div>
      </section>

      <section id="visit">
        <div className="wrap">
          <div className="eyebrow">Report for duty</div>
          <h2>Come<br /><em>hungry.</em></h2>
          <div className="vg">
            <div><b>Where</b><p>Near Thermax Chowk, Chikhali<small>BhagyaLaxmi Thermo Dies Compound, Mhetre Wadi, Hanuman Nagar, Chikhali, Pimpri-Chinchwad, MH 411062 · Near ICICI Bank</small></p></div>
            <div><b>Hours</b><p>Open all 7 days<small>Lunch 11 AM–4 PM · Dinner 7–11 PM · Local delivery 7–8:30 PM</small></p></div>
            <div><b>Call</b><p><a href="tel:08811994491">08811 994491</a><small>Call ahead for table availability or takeaway orders</small></p></div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn" href="https://maps.google.com/?q=Sainik+Hotel+Chikhali+Pimpri-Chinchwad+Maharashtra+411062" target="_blank" rel="noopener noreferrer">Get directions</a>
            <a className="btn ghost" href="https://www.instagram.com/sainikhotel_official" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
            <a className="btn ghost" href="#top">Back to top ↑</a>
          </div>
          <footer>
            <span style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <Image src="/images/reference/logo.jpg" alt="Sainik Hotel logo" width={54} height={54} />
              © Sainik Hotel · सैनिक हॉटेल
            </span>
            <span>KOLHAPURI · FIERY · SINCE 2019</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
