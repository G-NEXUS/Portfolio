/*Small script: closes the mobile menu on link tap and highlights the current section*/

var menu = document.getElementById("menu-toggle");
var links = document.querySelectorAll("nav a");
var sections = document.querySelectorAll("section[id]");

// 1. Close the mobile menu after tapping a link
links.forEach(function (link) {
link.addEventListener("click", function () { menu.checked = false; });
});

// 2. Highlight the menu link of the section you are on
function highlightMenu() {
var current = sections[0].id;

sections.forEach(function (section) {
    // 150 = a little space for the fixed top bar
    if (section.getBoundingClientRect().top <= 150) { current = section.id; }
});

// At the very bottom of the page, always select the last section
if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
    current = sections[sections.length - 1].id;
}

links.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
});
}

window.addEventListener("scroll", highlightMenu, { passive: true });
highlightMenu();
