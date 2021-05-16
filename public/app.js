const toggleButton = document.getElementsByClassName("burger")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];
const links = navbarLinks.querySelectorAll("a");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    toggleButton.classList.toggle("active");
  });
});
