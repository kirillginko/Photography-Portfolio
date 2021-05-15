const toggleButton = document.getElementsByClassName("burger")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});
