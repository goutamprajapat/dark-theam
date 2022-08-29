// let btn = document.getElementById("btn"),
// body = document.getElementById("bodyy");
// let darkTheam = "dark-Theam";
// let icon = "fa-sun";



// var setCurrentTheam = () => body.classList.contains(darkTheam) ? "dark" : "light";
// var setCurrentIcon = () => btn.classList.contains(icon) ? "fa-moon" : "fa-sun";

// const selectedTheam = localStorage.getItem("dark-Theam");
// const selectedIcon = localStorage.getItem("Icon");

// if (selectedTheam) {
//   body.classList[selectedTheam === "dark-Theam" ? "add" : "remove"](darkTheam);
//   btn.classList[selectedIcon === "fa-moon" ? "add" : "remove"](icon);
// }

// btn.addEventListener('click', () => {
// body.classList.add = 'darkTheam';
//   btn.classList.toggle(selectedIcon);
// });
// localStorage.setItem('selected-Theam', setCurrentTheam());
// localStorage.setItem('selected-Icon', setCurrentIcon());





const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode");
  // update darkMode when clicked
  // if (darkMode === "disabled") {
  //   enableDarkMode();
  // } else {
  //   disableDarkMode();
  // }
  darkMode === 'disabled' ? enableDarkMode() : disableDarkMode()
});
window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (e.matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  })
  
