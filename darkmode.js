/**
* The current state of dark mode ('active' or null).
* Retrieved from local storage.
* @type {string | null}
*/
let darkmode = localStorage.getItem('darkmode');

/**
* The theme switcher button element.
* If the element is not found, this will be null.
* @type {HTMLElement | null}
*/
const themeSwitch = document.getElementById('theme-switch');

/**
* Enables dark mode by adding the 'darkmode' class to the document body
* and updating the local storage.
*/
const enableDarkmode = () => {
   document.body.classList.add('darkmode');
   localStorage.setItem('darkmode', 'active');
};

/**
* Disables dark mode by removing the 'darkmode' class from the document body
* and updating the local storage.
*/
const disableDarkmode = () => {
   document.body.classList.remove('darkmode');
   localStorage.setItem('darkmode', null);
};

/**
* Checks if dark mode is active when the page loads
* and applies the dark mode if it is enabled.
*/
if (darkmode === "active") enableDarkmode();

/**
* Toggles dark mode on and off when the theme switch button is clicked.
*/
themeSwitch?.addEventListener("click", () => {
   darkmode = localStorage.getItem('darkmode');
   darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
