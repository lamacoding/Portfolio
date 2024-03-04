const btnSendMessage = document.getElementById("btn-submit-message");
const htmlEl = document.getElementsByTagName("html")[0];

//Sections
const topDiv = document.getElementById("top-div");
const sectionAbout = document.getElementById("about");
const sectionMyWork = document.getElementById("mywork");
const sectionTechStack = document.getElementById("techstack");

window.onload = function () {
  setActiveButton();
};

document.addEventListener("scroll", function () {
  setActiveButton();
});

function setActiveButton() {
  let currentScrollPos = window.scrollY;
  let btn;
  if (currentScrollPos <= topDiv.clientHeight - 100) {
    btn = 1;
  } else if (currentScrollPos <= topDiv.clientHeight + sectionAbout.clientHeight - 100) {
    btn = 2;
  } else if (currentScrollPos <= topDiv.clientHeight + sectionAbout.clientHeight + sectionMyWork.clientHeight - 100) {
    btn = 3;
  } else {
    btn = 4;
  }
  for (let i = 1; i <= 4; i++) {
    if (i == btn) {
      document.getElementById("btn-" + i).classList.add("active");
      continue;
    }
    document.getElementById("btn-" + i).classList.remove("active");
  }
}
