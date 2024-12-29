// adds 'darkmode' to the local storage
let darkmode = localStorage.getItem('darkmode')
// gets the id theme switch
const themeSwitch = document.getElementById('theme-switch')

// function to enable darkmode, adds darkmode when active
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

// function to disable darkmode, removes active and darkmode
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

// if active class is there, start enable darkmode function
if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})