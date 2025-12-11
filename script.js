document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // 1. 다국어(i18n) 세팅
  // ========================================
  const translations = {
    ko: {}, // 실제 텍스트는 로딩 시 DOM에서 자동 저장
    en: {
      tagline: "Revisiting Cheonan's spaces through the map",

      "hero-title": "See Cheonan at a glance<br><span>Urban Mapping Project</span>",
      "hero-p1":
        "This page is a mapping project that connects four representative places in Cheonan — <strong>Bus Terminal · Samgori Park · Independence Hall · Aunae Market</strong> — on a single map. It summarizes not only the mood of each place but also <strong>nearby restaurants</strong> and <strong>parking / public transport tips</strong>.",
      "hero-p2":
        "Scroll down and imagine walking through Cheonan while following the map.",
      "hero-li1": "Grasp the city structure at a glance",
      "hero-li2": "Mini maps and routes for each spot",
      "hero-li3": "Restaurant and transport guide for your actual visit",
      "hero-map-title": "Cheonan Overview Map",
      "hero-map-caption":
        "The relative locations of the four places in this project are marked on a 3D-style map.",

      "terminal-tag": "01 · Gateway to Cheonan",
      "terminal-title": "Cheonan Express Bus Terminal",

      "samgori-tag": "02 · Park of Festivals",
      "samgori-title": "Cheonan Samgori Park",

      "independence-tag": "03 · Space of History and Memory",
      "independence-title": "Independence Hall of Korea",

      "aunae-tag": "04 · Between Market and History",
      "aunae-title": "Aunae Market · Ryu Gwansun Historic Site",

      "label-food": "🍽️ Nearby Restaurants",
      "label-parking": "🚗 Parking Info",
      "label-transit": "🚌 Public Transport",

      // 고속터미널
      "terminal-p1":
        "Cheonan Express Bus Terminal is a major transfer hub and one of the city’s busiest commercial districts, with a mall, cinema, and cafés all connected. It is often the very first place visitors see, so it feels like a gateway into Cheonan.",
      "terminal-food-1":
        "<strong>Yangpohang Cheonan Sinbudong</strong> – A popular seafood restaurant near the terminal and department store, especially when you want sashimi.",
      "terminal-food-2":
        "<strong>Mount Fishtail</strong> – A unique spot where you can enjoy Indian and Nepalese-style curry and tandoori dishes.",
      "terminal-food-3":
        "<strong>Little Greece</strong> – A cozy dinner place known for salads and Greek-inspired dishes.",
      "terminal-parking":
        "You can use both the terminal building parking lot and the Shinsegae Department Store parking. If you combine your trip with shopping, you can get discounted parking, making it convenient to do shopping, dining, and bus travel all at once.",
      "terminal-transit":
        "From Seoul and the metropolitan area, it takes about an hour by express or intercity bus. From the bus stop in front of the terminal, you can take city buses directly to Independence Hall, Samgori Park, and Aunae Market.",

      // 삼거리공원
      "samgori-p1":
        "Samgori Park is famous for the Cheonan Samgeori Heungtaryeong Festival. It has a large lawn square, walking paths, and an outdoor stage, so seasonal festivals and performances are held here throughout the year.",
      "samgori-food-1":
        "<strong>Restaurants around Samgori Rest Area</strong> – A cluster of places serving gukbap, set menus, and snacks, perfect for a short drive-and-eat course.",
      "samgori-food-2":
        "<strong>Salad Days (Samgori Rest Area branch)</strong> – A salad-focused spot that’s great when you want a light meal.",
      "samgori-food-3":
        "<strong>Local Korean eateries nearby</strong> – Small Korean restaurants scattered along the outer roads make it easy to grab a simple meal after a walk.",
      "samgori-parking":
        "You can use public parking lots around the park and the parking lot in front of the event area. During festival periods, temporary parking and shuttle buses often operate, so it’s best to check the event information page before visiting.",
      "samgori-transit":
        "From Cheonan Station or the bus terminal, take a city bus to the “Samgori Park” stop or nearby stops, then walk about 5–10 minutes to reach the park.",

      // 독립기념관
      "independence-p1":
        "Independence Hall of Korea is a large history museum that focuses on the independence movement during the Japanese occupation. Multiple exhibition halls, a vast outdoor plaza, and walking trails make it a place where you can easily spend an entire day.",
      "independence-food-1":
        "<strong>Byeongcheon Sundae Alley</strong> – About a 10-minute drive away, this alley near Aunae Market is lined with famous blood-sausage soup restaurants, perfect for combining history and food in one course.",
      "independence-food-2":
        "<strong>Happy Sushi Restaurant</strong> – A clean and casual sushi and Japanese restaurant nearby.",
      "independence-food-3":
        "<strong>Nearby snack bars and Korean diners</strong> – Around the parking area you’ll find simple places where you can grab a quick bite.",
      "independence-parking":
        "The large parking lots are well-equipped, and the fees are relatively low for long stays. On weekends and holidays it gets crowded with out-of-town visitors, so arriving a bit early is recommended.",
      "independence-transit":
        "From Cheonan Express Bus Terminal or Cheonan Station, you can take a city bus bound for Independence Hall without transfers. The bus stop itself is named “Independence Hall,” so it’s easy to find.",

      // 아우내장터
      "aunae-p1":
        "Aunae Market is a traditional market where a major March 1st Independence Movement demonstration once took place, and even today a five-day market is held. Right next to it is the Ryu Gwansun Historic Site, so you can combine history learning, market strolling, and Byeongcheon sundae in one course.",
      "aunae-food-1":
        "<strong>Parksunja Aunae Sundae</strong> – A nationally famous Byeongcheon blood-sausage restaurant where you can enjoy sundae soup and assorted platters.",
      "aunae-food-2":
        "<strong>Chungnam House</strong> – A long-running, old-school sundae specialty restaurant.",
      "aunae-food-3":
        "<strong>Other sundae alley restaurants</strong> – The entire alley is lined with sundae places, so choosing where to eat is part of the fun.",
      "aunae-parking":
        "You can use public parking lots around the market and spaces near the Byeongcheon sundae alley. It can get quite crowded on market days, so planning your route together with a visit to Independence Hall makes it more convenient.",
      "aunae-transit":
        "From Cheonan Express Bus Terminal or Cheonan Station, take a city bus toward Byeongcheon and get off at the “Aunae Market” stop. Many people visit as a second stop after Independence Hall by taking another bus.",
    },
  };

  const i18nElements = document.querySelectorAll("[data-i18n]");

  // 초기 한국어 텍스트를 ko 딕셔너리에 저장
  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    translations.ko[key] = el.innerHTML.trim();
  });

  const langToggle = document.querySelector(".lang-toggle");

  function setLanguage(lang) {
    document.documentElement.setAttribute("data-lang", lang);

    i18nElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = translations[lang][key];
      if (text) {
        el.innerHTML = text;
      }
    });

    if (langToggle) {
      langToggle.textContent = lang === "ko" ? "KR / EN" : "EN / KR";
    }
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-lang") || "ko";
      const next = current === "ko" ? "en" : "ko";
      setLanguage(next);
    });
  }

  // 초기 언어는 한국어
  setLanguage("ko");

  // ========================================
  // 2. 기존 기능들 (슬라이더, 핀 클릭, TOP 버튼 등)
  // ========================================

  // 장소별 슬라이더
  const sliders = document.querySelectorAll(".place-slider");

  sliders.forEach((slider) => {
    const track = slider.querySelector(".slide-track");
    const slides = Array.from(track.querySelectorAll("img"));
    const prevBtn = slider.querySelector(".slide-prev");
    const nextBtn = slider.querySelector(".slide-next");

    let index = 0;

    function updateSlide() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (!slides.length || !prevBtn || !nextBtn) return;

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlide();
    });
  });

  // 히어로 지도 핀 -> 해당 섹션으로 스크롤
  document.querySelectorAll(".hero-pin").forEach((pin) => {
    pin.addEventListener("click", () => {
      const target = pin.getAttribute("data-target");
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // TOP 버튼
  const topBtn = document.querySelector(".top-button");
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 섹션 색상에 따라 TOP 버튼 색을 바꾸기
  const sections = document.querySelectorAll("section[data-color]");
  function updateTopButtonColor() {
    if (!topBtn) return;
    let current = null;
    const scrollY = window.scrollY;
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const offsetTop = rect.top + scrollY;
      if (scrollY + 140 >= offsetTop) {
        current = sec;
      }
    });

    if (current) {
      const color = current.getAttribute("data-color");
      topBtn.style.background = color || "#2563eb";
    } else {
      topBtn.style.background = "#2563eb";
    }
  }

  updateTopButtonColor();
  window.addEventListener("scroll", updateTopButtonColor);

  // 스크롤 리빌 애니메이션 (IntersectionObserver)
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
});
