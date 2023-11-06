//Load the nav.html into the placeholder div
document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("nav-placeholder");

  fetch("modules/nav.html")
    .then((response) => response.text())
    .then((navHTML) => {
      navPlaceholder.innerHTML = navHTML;

      toggleColorMode();
      window.addEventListener("scroll", navbarColorOnScroll);
    })
    .catch((error) => {
      console.error("Error loading navigation menu:", error);
    });
});

function navbarColorOnScroll() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("bg-body");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-body");
    navbar.classList.add("bg-transparent");
  }
}

function toggleColorMode() {
  const toggleColorModeEl = document.getElementById("switch-color-mode");
  const HtmlEl = document.getElementsByTagName("html")[0];

  let colorMode;
  console.debug("Loaded");
  localStorage.getItem("colorMode");
  colorMode = localStorage.getItem("colorMode");
  console.debug(colorMode);

  if (colorMode == "dark") {
    toggleColorModeEl.checked = false;
    HtmlEl.setAttribute("data-bs-theme", "dark");
  } else {
    toggleColorModeEl.checked = true;
    HtmlEl.setAttribute("data-bs-theme", "light");
  }
  toggleColorModeEl.addEventListener("click", function () {
    if (this.checked) {
      console.debug("Set light mode.");
      HtmlEl.setAttribute("data-bs-theme", "light");
      localStorage.setItem("colorMode", "light");
    } else {
      console.debug("Set dark mode.");
      HtmlEl.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("colorMode", "dark");
    }
  });
}
