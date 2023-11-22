let btnMyWork = document.getElementById("btn-mywork");
let btnContactMe = document.getElementById("btn-contactme");
let htmlEl = document.getElementsByTagName("html")[0];

//Sections
let topDiv = document.getElementById("top-div");
let sectionAbout = document.getElementById("about");
let sectionMyWork = document.getElementById("mywork");
let sectionTechStack = document.getElementById("techstack");

document.addEventListener("scroll", function () {
  let currentScrollPos = window.scrollY;

  if (currentScrollPos <= topDiv.clientHeight - 100) {
    switchTheme("dark");
  } else {
    if (currentScrollPos > topDiv.clientHeight - 100) {
      switchTheme("light");
    }

    if (
      currentScrollPos >
      sectionAbout.clientHeight + topDiv.clientHeight - 100
    ) {
      switchTheme("dark");
    }

    if (
      currentScrollPos >
      sectionMyWork.clientHeight +
        sectionAbout.clientHeight +
        topDiv.clientHeight -
        100
    ) {
      switchTheme("light");
    }
  }
});

function switchTheme(theme) {
  if (theme === "light") {
    htmlEl.setAttribute("data-bs-theme", "light");
    document.documentElement.style.setProperty("--bs-body", "#D1D1C7");
    document.documentElement.style.setProperty("--bs-text", "black");
    btnMyWork.classList.remove("btn-outline-light");
    btnMyWork.classList.add("btn-outline-dark");
    btnContactMe.classList.remove("btn-light");
    btnContactMe.classList.add("btn-dark");
  } else if (theme === "dark") {
    htmlEl.setAttribute("data-bs-theme", "dark");
    document.documentElement.style.setProperty("--bs-body", "rgb(31, 28, 36)");
    document.documentElement.style.setProperty("--bs-text", "#D1D1C7");
    btnMyWork.classList.remove("btn-outline-dark");
    btnMyWork.classList.add("btn-outline-light");
    btnContactMe.classList.remove("btn-dark");
    btnContactMe.classList.add("btn-light");
  }
}
