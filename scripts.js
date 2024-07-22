document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleBtnIcon = document.querySelector(".toggle_btn i");
  const dropDownMenu = document.querySelector(".dropdown_menu");

  if (toggleBtn && toggleBtnIcon && dropDownMenu) {
    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle("open");
      const isOpen = dropDownMenu.classList.contains("open");

      toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    };
  } else {
    console.error("One or more elements not found");
  }
});
