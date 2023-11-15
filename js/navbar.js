//Load the nav.html into the placeholder div
document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("nav-placeholder");

  fetch("modules/nav.html")
    .then((response) => response.text())
    .then((navHTML) => {
      navPlaceholder.innerHTML = navHTML;
    })
    .catch((error) => {
      console.error("Error loading navigation menu:", error);
    });
});