// loader .........  aos-animate
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time
  setTimeout(function () {
    // Hide loader
    document.querySelector(".loader").style.display = "none";
    // Show content
    document.querySelector(".my-content").style.display = "block";

    // Animation - library --- AOS ----//
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, 2000); // Change 3000 to actual loading time in milliseconds
});

//  dark mode
document.addEventListener("DOMContentLoaded", (event) => {
document.querySelector("nav .moon").onclick = function () {
  document.querySelector(".hamburger div").style.background = "#fff";
  document.querySelector(".hamburger .meat").style.background = "#fff";
  document.querySelector(".hamburger .bottom-bun ").style.background = "#fff";
  document.querySelector("body").classList.add("dark");
  document.querySelector("i").classList.add("color-white");
  document.querySelector("nav").classList.add("dark");
  document.querySelector("nav ul li a").classList.add("dark");
  document.querySelector("header h1").classList.add("color-black");
  document.querySelector("header span").classList.add("dark");
  document.querySelector("nav .moon").style.display = "none";
  document.querySelector("nav .sun").style.display = "block";
  document.querySelector("header div").classList.add("dark");

};
});


// light mode
document.addEventListener("DOMContentLoaded", (event) => {
document.querySelector("nav .sun").onclick = function () {
  document.querySelector(".hamburger div").style.background = "#000";
  document.querySelector(".hamburger .meat").style.background = "#000";
  document.querySelector(".hamburger .bottom-bun").style.background = "#000";
  document.querySelector("body").classList.remove("dark");
  document.querySelector("i").classList.remove("color-white");
  document.querySelector("nav").classList.remove("dark");
  document.querySelector("nav ul li a").classList.remove("dark");
  document.querySelector("header h1").classList.remove("color-black");
  document.querySelector("header span").classList.remove("dark");
  document.querySelector("nav .sun").style.display = "none";
  document.querySelector("nav .moon").style.display = "block";
};
});

// Show the scroll up button when user scrolls down
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollUpBtn").style.display = "block";
  } else {
    document.getElementById("scrollUpBtn").style.display = "none";
  }
}

// Function to scroll to the top with smooth animation
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", (event) => {
document.querySelector(".hamburger").onclick = function() {
  document.querySelector("header div").classList.toggle("nwn");
};
});
