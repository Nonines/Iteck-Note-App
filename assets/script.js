const displayController = (() => {
  const navMenuToggler = document.getElementById("nav-toggler");
  const navMenu = document.getElementById("nav-items");

  navMenuToggler.addEventListener("click", () => {
    if (navMenu.classList.contains("hidden")) {
      navMenu.classList.remove("hidden");
    } else {
      navMenu.classList.add("hidden");
    }
  });
})();
