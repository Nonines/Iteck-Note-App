const navController = (() => {
  const navMenuToggler = document.getElementById("nav-toggler");
  const navMenu = document.getElementById("nav-items");

  navMenuToggler.addEventListener("click", () => {
    if (navMenu.style.maxHeight) {
      navMenu.style.maxHeight = null;
      setTimeout(() => {
        navMenu.classList.toggle("hidden");
      }, 400);
    } else {
      navMenu.classList.toggle("hidden");
      navMenu.style.maxHeight = navMenu.scrollHeight + 500 + "px";
    }
  });
})();

const accordionController = (() => {
  const accordionBtn1 = document.querySelector(".accordion-btn1");
  const accordionBody1 = document.querySelector(".accordion-body1");
  const accordionBtn2 = document.querySelector(".accordion-btn2");
  const accordionBody2 = document.querySelector(".accordion-body2");
  const accordionBtn3 = document.querySelector(".accordion-btn3");
  const accordionBody3 = document.querySelector(".accordion-body3");
  const accordionContents = document.querySelectorAll(".accordion-body");

  function toggleAccordion(element) {
    if (element.style.maxHeight) {
      element.style.maxHeight = null;
      setTimeout(() => {
        element.classList.toggle("hidden");
      }, 400);
    } else {
      // to show
      element.classList.toggle("hidden");
      setTimeout(() => {
        element.style.maxHeight = "150px";
      }, 100);

      for (let body of accordionContents) {
        if (body !== element) {
          body.style.maxHeight = null;
          setTimeout(() => {
            body.classList.add("hidden");
          }, 400);
        }
      }
    }
  }

  accordionBtn1.addEventListener("click", () => {
    toggleAccordion(accordionBody1);
    accordionBtn1.classList.toggle("text-purple-800");
    accordionBtn1.classList.toggle("dr-open");
    accordionBtn2.classList.toggle("text-purple-800", false);
    accordionBtn2.classList.toggle("dr-open", false);
    accordionBtn3.classList.toggle("text-purple-800", false);
    accordionBtn3.classList.toggle("dr-open", false);
  });

  accordionBtn2.addEventListener("click", () => {
    toggleAccordion(accordionBody2);
    accordionBtn2.classList.toggle("text-purple-800");
    accordionBtn2.classList.toggle("dr-open");
    accordionBtn1.classList.toggle("text-purple-800", false);
    accordionBtn1.classList.toggle("dr-open", false);
    accordionBtn3.classList.toggle("text-purple-800", false);
    accordionBtn3.classList.toggle("dr-open", false);
  });

  accordionBtn3.addEventListener("click", () => {
    toggleAccordion(accordionBody3);
    accordionBtn3.classList.toggle("text-purple-800");
    accordionBtn3.classList.toggle("dr-open");
    accordionBtn1.classList.toggle("text-purple-800", false);
    accordionBtn1.classList.toggle("dr-open", false);
    accordionBtn2.classList.toggle("text-purple-800", false);
    accordionBtn2.classList.toggle("dr-open", false);
  });
})();
