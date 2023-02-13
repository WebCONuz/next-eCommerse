window.addEventListener("DOMContentLoaded", function () {
  // -----------------------------------------------------------
  // Header ----------------------------------------------------
  // -----------------------------------------------------------
  const header = document.querySelector(".header");
  const menuList = document.querySelector(".menuList");
  if (window.scrollY > 0) {
    header.classList.add("bg-white", "active");
    menuList.classList.remove("top-[84px]", "sm:top-[93px]");
    menuList.classList.add("active-top");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("bg-white", "active");
      menuList.classList.remove("top-[84px]", "sm:top-[93px]");
      menuList.classList.add("active-top");
    } else {
      header.classList.remove("bg-white", "active");
      menuList.classList.add("top-[84px]", "sm:top-[93px]");
      menuList.classList.remove("active-top");
    }
    if (menuList.classList.contains("flex")) {
      header.classList.add("bg-white");
    }
  });

  // -----------------------------------------------------------
  // Menu & Sidebar --------------------------------------------
  // -----------------------------------------------------------
  const langList = document.querySelector(".langList");
  const langArea = document.querySelector(".lang-area");
  const langListItems = document.querySelectorAll(".langList > li");
  this.window.addEventListener("click", function (e) {
    if (e.target.classList.contains("lang-element")) {
      langList.classList.toggle("hidden");
      langList.classList.toggle("flex");
    } else {
      langList.classList.add("hidden");
      langList.classList.remove("flex");
    }

    if (e.target.classList.contains("menu-element")) {
      menuList.classList.toggle("hidden");
      menuList.classList.toggle("flex");
      if (menuList.classList.contains("flex")) {
        header.classList.add("bg-white");
      }
    } else {
      menuList.classList.add("hidden");
      menuList.classList.remove("flex");
    }
  });
  langListItems.forEach((item) => {
    item.addEventListener("click", function () {
      langArea.innerHTML = this.innerHTML;
      const img = document.querySelector(".lang-area img"),
        span = document.querySelector(".lang-area span");
      span.classList.add("lang-element");
      img.classList.add("lang-element");
    });
  });
  // -----------------------------------------------------------
  // Menu & Sidebar --------------------------------------------
  // -----------------------------------------------------------
  const menu = document.querySelector(".menu-btn");
  const menuItems = document.querySelectorAll(".menuList > li");
  const asideItems = document.querySelectorAll(".aside-list > a");
  const modileAsideItems = document.querySelectorAll(".mobile-aside > a");

  menuItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      // PC aside ---
      asideItems.forEach((item) => {
        item.classList.remove("w-[25px]", "h-[25px]", "text-white");
        item.classList.add("w-[12px]", "h-[12px]", "text-[#086000]");
      });
      asideItems[index].classList.remove(
        "w-[12px]",
        "h-[12px]",
        "text-[#086000]"
      );
      asideItems[index].classList.add("w-[25px]", "h-[25px]", "text-white");

      // Mobile aside ---
      modileAsideItems.forEach((item) => {
        item.classList.remove("w-[25px]", "h-[25px]", "text-white");
        item.classList.add("w-[12px]", "h-[12px]", "text-[#086000]");
      });
      modileAsideItems[index].classList.remove(
        "w-[12px]",
        "h-[12px]",
        "text-[#086000]"
      );
      modileAsideItems[index].classList.add(
        "w-[25px]",
        "h-[25px]",
        "text-white"
      );
    });
  });

  // PC aside ---
  asideItems.forEach((item) => {
    item.addEventListener("click", function () {
      asideItems.forEach((item) => {
        item.classList.remove("w-[25px]", "h-[25px]", "text-white");
        item.classList.add("w-[12px]", "h-[12px]", "text-[#086000]");
      });
      this.classList.remove("w-[12px]", "h-[12px]", "text-[#086000]");
      this.classList.add("w-[25px]", "h-[25px]", "text-white");
    });
  });

  // Mobile aside ---
  modileAsideItems.forEach((item) => {
    item.addEventListener("click", function () {
      modileAsideItems.forEach((item) => {
        item.classList.remove("w-[25px]", "h-[25px]", "text-white");
        item.classList.add("w-[12px]", "h-[12px]", "text-[#086000]");
      });
      this.classList.remove("w-[12px]", "h-[12px]", "text-[#086000]");
      this.classList.add("w-[25px]", "h-[25px]", "text-white");
    });
  });

  // -----------------------------------------------------------
  // Customer slider -------------------------------------------
  // -----------------------------------------------------------
  const owl1 = $(".service__carousel");
  owl1.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      768: {
        item: 3,
      },
      1024: {
        items: 4,
      },
    },
  });

  // -----------------------------------------------------------
  // Customer slider -------------------------------------------
  // -----------------------------------------------------------
  const owl2 = $(".blog__slider");
  owl2.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });

  // -----------------------------------------------------------
  // Portfolio -------------------------------------------------
  // -----------------------------------------------------------
  const portfolioItems = document.querySelectorAll(".portfolio-nav > li");
  const phoneView = document.querySelector(".phone > .phone_bg");
  const desctopView = document.querySelector(".desctop > .desctop_bg");
  const projectName = document.querySelector("#portfolio-link");
  portfolioItems.forEach((item, i) => {
    item.addEventListener("click", function () {
      console.log(phoneView, portfolioData[i].phoneSrc);
      phoneView.setAttribute("src", portfolioData[i].phoneSrc);
      desctopView.setAttribute("src", portfolioData[i].pcSrc);
      projectName.setAttribute("href", portfolioData[i].pathURL);
      projectName.innerText = portfolioData[i].title;
    });
  });
});
