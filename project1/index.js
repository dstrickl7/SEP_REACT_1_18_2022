// Navbar variables
const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navbar__navlist-container");
const overlay = document.querySelector(".overlay");
const navBtn = document.querySelector(".navbar__btn");
const navlinks = document.querySelectorAll(".navitem");
const navbar = document.querySelector(".navbar");
const categoriesLink = document.querySelector("#categories");
const categories = document.querySelector(".navbar__categories-container");

// Open mobile nav
if (navlist) {
  navBtn.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlist.classList.toggle("active");
    overlay.classList.toggle("active");
    if (
      categories.classList.contains("active") &&
      document.documentElement.clientWidth < 765
    ) {
      categories.classList.remove("active");
    }
  });
}

categoriesLink.addEventListener("click", () => {
  categories.classList.toggle("active");
});

// Sidebar variables
const sidebarBtn = document.querySelector(".sidebar__btn");
const scrollingSidebar = document.querySelector(
  ".sidebar__scrolling-sidebar-inner-container"
);
const dropdownHeading = document.querySelector(".dropdown-heading");

sidebarBtn.addEventListener("click", () => {
  scrollingSidebar.classList.toggle("dropdown");
  dropdownHeading.classList.toggle("hidden");
});
