let scrollPosEl = document.getElementById("scrollpos");
let btnMyWork = document.getElementById("btn-mywork");
let btnContactMe = document.getElementById("btn-contactme");
let htmlEl = document.getElementsByTagName("html")[0];
let sectionMyWork = document.getElementById("mywork");
let sectionTechStack = document.getElementById("techstack");

document.addEventListener("scroll", function () {
  let currentScrollPos = window.scrollY;
  let viewPortHeight = window.innerHeight;

  scrollPosEl.textContent = currentScrollPos;

  if (currentScrollPos <= viewPortHeight) {
    switchTheme("dark");
  } else {
    if (currentScrollPos >= sectionMyWork.scrollTop) {
      switchTheme("light");
    }

    if (currentScrollPos > sectionTechStack.scrollTop) {
      switchTheme("dark");
    }
  }
});

function switchTheme(theme) {
  if (theme === "light") {
    htmlEl.setAttribute("data-bs-theme", "light");
    document.documentElement.style.setProperty(
      "--bs-body",
      "rgb(220, 220, 220)"
    );
    document.documentElement.style.setProperty("--bs-text", "black");
    btnMyWork.classList.remove("btn-outline-light");
    btnMyWork.classList.add("btn-outline-dark");
    btnContactMe.classList.remove("btn-light");
    btnContactMe.classList.add("btn-dark");
  } else if (theme === "dark") {
    htmlEl.setAttribute("data-bs-theme", "dark");
    document.documentElement.style.setProperty("--bs-body", "rgb(31, 28, 36)");
    document.documentElement.style.setProperty("--bs-text", "white");
    btnMyWork.classList.remove("btn-outline-dark");
    btnMyWork.classList.add("btn-outline-light");
    btnContactMe.classList.remove("btn-dark");
    btnContactMe.classList.add("btn-light");
  }
}
