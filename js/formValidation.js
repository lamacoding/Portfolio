// Disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");
  const closeModal = document.getElementById("close-modal");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
        /*
              if (form.valid()) {
                closeModal.click();
                form.classList.remove("was-validated");
                form.reset();
              }*/
      },
      false
    );
  });
})();
