"use-strict";

const navCls = {
  open: "menu--open",
  close: "menu--closed",
};

// DOM elements
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const navRelatedEls = document.querySelectorAll("[data-group='nav']");

// functions and callbacks
function toggleMenuVisibility() {
  navRelatedEls?.forEach((item) => {
    const { classList } = item;
    if (classList.contains(navCls.open)) {
      classList.remove(navCls.open, navCls.close); // this step is to prevent multiple menu--open or menu--closed classes
      classList.add(navCls.close);
      return;
    }
    if (classList.contains(navCls.close)) {
      classList.remove(navCls.open, navCls.close); // this step is to prevent multiple menu--open or menu--closed classes
      classList.add(navCls.open);
    }
  });
}

// event listeners
window.addEventListener("load", () => {
  hamburgerBtn?.addEventListener("click", toggleMenuVisibility);
  closeBtn?.addEventListener("click", toggleMenuVisibility);
});
window.addEventListener("unload", () => {
  hamburgerBtn?.removeEventListener("click", toggleMenuVisibility);
  closeBtn?.removeEventListener("click", toggleMenuVisibility);
});
