const accordionBodyElements = document.querySelectorAll(".accordion__body");

const resetHeight = () => {
  accordionBodyElements.forEach((element) => {
    element.style.minHeight = 0;
  });
};

const openAccordion = (bodyElement) => {
  resetHeight();
  bodyElement.style.minHeight = 120 + "px";
};

export { openAccordion };
