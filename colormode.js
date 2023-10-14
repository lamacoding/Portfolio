const toggleColorMode = document.getElementById("switch-color-mode");
const HtmlEl = document.getElementsByTagName("html")[0];
var colorMode;

window.addEventListener("load", (event) => {
    console.debug("Loaded");
    localStorage.getItem("colorMode");
    colorMode = localStorage.getItem("colorMode");
    console.debug(colorMode);

    if(colorMode == "dark") {
        toggleColorMode.checked = false;
        HtmlEl.setAttribute("data-bs-theme", "dark");
    }
    else {
        toggleColorMode.checked = true;
        HtmlEl.setAttribute("data-bs-theme", "light");
    }
})

toggleColorMode.addEventListener("click", function() {
    if(this.checked) {
        console.debug("Set light mode.");
        HtmlEl.setAttribute("data-bs-theme", "light");
        localStorage.setItem("colorMode", "light");
    }
    else {
        console.debug("Set dark mode.");
        HtmlEl.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("colorMode", "dark");
    }
})