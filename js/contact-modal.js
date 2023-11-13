document.addEventListener("DOMContentLoaded", function () {
  const contactModal = document.getElementById("contact-modal");

  fetch("modules/contact-modal.html")
    .then((response) => response.text())
    .then((navHTML) => {
      contactModal.innerHTML = navHTML;
    })
    .catch((error) => {
      console.error("Error loading contact modal:", error);
    });
});
