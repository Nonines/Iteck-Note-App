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
  function toggleAccordion(
    selectedBody,
    siblingBodies,
    selectedButton,
    siblingButtons
  ) {
    // opens/closes accordion by modifying maxheight and display style properties
    if (selectedBody.style.maxHeight) {
      selectedBody.style.maxHeight = null;
      setTimeout(() => {
        selectedBody.classList.toggle("hidden");
      }, 400);
    } else {
      selectedBody.classList.toggle("hidden");
      setTimeout(() => {
        selectedBody.style.maxHeight = "150px";
      }, 100);
    }

    // makes sure to close any other open accordion
    for (let body of siblingBodies) {
      if (body !== selectedBody) {
        body.style.maxHeight = null;
        setTimeout(() => {
          body.classList.add("hidden");
        }, 400);
      }
    }

    // and removes styling as well
    for (let button of siblingButtons) {
      if (selectedButton !== button) {
        button.classList.remove("text-purple-800");
        button.classList.remove("dr-open");
      } else {
        selectedButton.classList.toggle("text-purple-800");
        selectedButton.classList.toggle("dr-open");
      }
    }
  }

  // security section
  const accordionBodies = document.querySelectorAll(".accordion-body");
  const accordionButtons = document.querySelectorAll(".accordion-btn");
  for (let button of accordionButtons) {
    button.addEventListener("click", () => {
      toggleAccordion(
        button.parentElement.nextElementSibling,
        accordionBodies,
        button,
        accordionButtons
      );
    });
  }

  // faq section
  const faqAccordionBodies = document.querySelectorAll(".faq-accordion-body");
  const faqAccordionButtons = document.querySelectorAll(".faq-accordion-btn");

  for (let button of faqAccordionButtons) {
    button.addEventListener("click", () => {
      toggleAccordion(
        button.parentElement.nextElementSibling,
        faqAccordionBodies,
        button,
        faqAccordionButtons
      );
    });
  }
})();
