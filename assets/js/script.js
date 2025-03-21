'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});

// Define menu data for different categories
const menuData = {
  starters: [
    { name: "Greek Salad", price: "25 MAD", image: "./assets/images/menu-1.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    { name: "Bruschetta", price: "20 MAD", image: "./assets/images/menu-2.png" },
    // Add more starter items here
  ],
  breakfast: [
    { name: "Pancakes", price: "15 MAD", image: "./assets/images/menu-3.png" },
    { name: "Pancakes", price: "15 MAD", image: "./assets/images/menu-3.png" },
    { name: "Pancakes", price: "15 MAD", image: "./assets/images/menu-3.png" },
    { name: "Pancakes", price: "15 MAD", image: "./assets/images/menu-3.png" },
    { name: "Pancakes", price: "15 MAD", image: "./assets/images/menu-3.png" },
    { name: "Pancakes", price: "15 MAD", image: "./assets/images/menu-3.png" },
    { name: "Pancakes", price: "15 MAD", image: "./assets/images/menu-3.png" },
    { name: "Pancakes", price: "15 MAD", image: "./assets/images/menu-3.png" },
    // Add more breakfast items here
  ],
  lunch: [
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    { name: "Grilled Chicken", price: "40 MAD", image: "./assets/images/menu-5.png" },
    // Add more lunch items here
  ],
  dinner: [
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    { name: "Steak", price: "60 MAD", image: "./assets/images/menu-6.png" },
    // Add more dinner items here
  ],
};

let currentMenu = "starters"; // Default menu category
let itemsPerPage = 6; // Number of items to show per "Load More" click
let currentPage = 1;

// Function to render menu items
const renderMenu = (showAll = false) => {
  const menuList = document.getElementById("menu-list");
  menuList.innerHTML = ""; // Clear previous menu items

  const items = showAll
    ? menuData[currentMenu] // Show all items if showAll is true
    : menuData[currentMenu].slice(0, currentPage * itemsPerPage);

  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="menu-card hover:card">
        <figure class="card-banner img-holder">
          <img src="${item.image}" alt="${item.name}" class="img-cover">
        </figure>
        <div>
          <div class="title-wrapper">
            <h3 class="title-3"><a href="#" class="card-title">${item.name}</a></h3>
            <span class="span title-2">${item.price}</span>
          </div>
          <p class="card-text label-1">A delicious dish made with fresh ingredients.</p>
        </div>
      </div>
    `;
    menuList.appendChild(li);
  });

  // Hide "Load More" button if all items are displayed
  const loadMoreBtn = document.querySelector(".btn.btn-primary");
  if (showAll || currentPage * itemsPerPage >= menuData[currentMenu].length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
};

// Function to handle category switching
const switchMenuCategory = (category) => {
  currentMenu = category;
  currentPage = 1; // Reset to the first page
  renderMenu();
};

// Function to load more items
const loadMoreMenu = () => {
  currentPage++;
  renderMenu();
};

// Function to view all menu items
const viewAllMenu = () => {
  renderMenu(true); // Pass true to render all items
};

// Add event listeners to menu buttons
document.querySelectorAll(".menu-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".menu-button").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const category = button.getAttribute("data-menu");
    switchMenuCategory(category);
  });
});

// Add event listener to "Load More" button
document.querySelector(".btn.btn-primary").addEventListener("click", loadMoreMenu);

// Add event listener to "View All Menu" button
document.querySelector(".btn-view-all").addEventListener("click", viewAllMenu);

// Initial render
window.addEventListener("load", () => {
  switchMenuCategory(currentMenu);
});




  document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting the normal way

    const form = event.target;

    // Send form data to Web3Forms using fetch
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        showThankYouCard(); // Show the thank you card if submission is successful
      } else {
        alert('Error: Please try again');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    });
  });

  function showThankYouCard() {
    // HTML for the Thank You card
    const thankYouCard = `
      <div class="thank-you-card">
        <div class="thank-you-content">
          <h2>Thank You!</h2>
          <p>Your reservation has been successfully received. We will get back to you shortly.</p>
          <a href="/" class="thank-you-button">Go Back</a>
        </div>
      </div>
    `;
    // Insert the card into the body of the page
    document.body.insertAdjacentHTML('beforeend', thankYouCard);
  }






  //animation 

  class AOS {
    constructor(options = {}) {
      this.options = {
        offset: 120, // Trigger offset (px)
        duration: 600, // Animation duration (ms)
        ...options
      };
  
      this.elements = [];
      this.init();
    }
  
    init() {
      this.elements = [...document.querySelectorAll('[data-aos]')];
      this.addEventListeners();
      this.checkPosition();
    }
  
    addEventListeners() {
      window.addEventListener('scroll', this.checkPosition.bind(this));
      window.addEventListener('resize', this.checkPosition.bind(this));
    }
  
    isElementInView(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight - this.options.offset) &&
        rect.bottom >= this.options.offset
      );
    }
  
    animateElement(el) {
      el.classList.add('aos-animate');
    }
  
    resetElement(el) {
      el.classList.remove('aos-animate');
    }
  
    checkPosition() {
      this.elements.forEach(el => {
        if (this.isElementInView(el)) {
          this.animateElement(el);
        } else {
          this.resetElement(el);
        }
      });
    }
  }
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    new AOS({
      offset: 120, // Trigger offset (px)
      duration: 600 // Animation duration (ms)
    });
  });
  















  const chatbotButton = document.getElementById('chatbotButton');
  const chatbotContainer = document.getElementById('chatbotContainer');
  const chatbotIframe = document.getElementById('chatbotIframe');
  
  const openSound = new Audio('green.mp3'); 
  const closeSound = new Audio('yellow.mp3');
  
  // التحقق مما إذا كان الجهاز هو iPhone أو iPad
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  
  chatbotButton.addEventListener('click', function(event) {
      event.stopPropagation();
  
      if (isIOS) {
          // فتح الشات بوت في نافذة جديدة على الآيفون
          window.open('https://www.chatbase.co/chatbot-iframe/p-F8yFJFitj6Bf3_7gunK', '_blank');
      } else {
          // تشغيل أو إخفاء الشات بوت في باقي الأجهزة
          if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
              chatbotContainer.style.display = 'block';  
              openSound.play();
          } else {
              chatbotContainer.style.display = 'none';  
              closeSound.play();
          }
      }
  });
  
  // إغلاق الشات بوت عند النقر خارج الحاوية (لغير iOS)
  document.addEventListener('click', function(event) {
      if (!isIOS && !chatbotContainer.contains(event.target) && event.target !== chatbotButton) {
          chatbotContainer.style.display = 'none';
          closeSound.play();
      }
  });
  
