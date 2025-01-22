const btn = document.getElementById("btn");
const menu = document.getElementById("mobile-menu");
const ham = document.getElementById(".hamburger");
const menuItems = document.querySelectorAll("menu-item");

btn.addEventListener("click", toggleFunction);
function toggleFunction() {
  menu.classList.toggle("flex");
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
}

menu.addEventListener("click", checkToggle);
function checkToggle(e) {
  if (e.target.id === "menu-item") {
    menu.classList.toggle("hidden");
    btn.classList.remove("open");
  }
}
