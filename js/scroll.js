const btnMyWork = document.getElementById("btn-mywork");
const btnContactMe = document.getElementById("btn-contactme");
const btnSendMessage = document.getElementById("btn-submit-message");
const htmlEl = document.getElementsByTagName("html")[0];

//Sections
const topDiv = document.getElementById("top-div");
const sectionAbout = document.getElementById("about");
const sectionMyWork = document.getElementById("mywork");
const sectionTechStack = document.getElementById("techstack");

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
    btnSendMessage.classList.remove("btn-light");
    btnSendMessage.classList.add("btn-dark");
    btnContactMe.classList.remove("btn-light");
    btnContactMe.classList.add("btn-dark");
  } else if (theme === "dark") {
    htmlEl.setAttribute("data-bs-theme", "dark");
    document.documentElement.style.setProperty("--bs-body", "rgb(31, 28, 36)");
    document.documentElement.style.setProperty("--bs-text", "#D1D1C7");
    btnMyWork.classList.remove("btn-outline-dark");
    btnMyWork.classList.add("btn-outline-light");
    btnSendMessage.classList.remove("btn-dark");
    btnSendMessage.classList.add("btn-light");
    btnContactMe.classList.remove("btn-dark");
    btnContactMe.classList.add("btn-light");
  }
}
