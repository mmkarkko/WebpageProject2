/* Creates dropdown menu */
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

  /* Creates dropdown menu icons */
  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleBtnIcon = document.querySelector(".toggle_btn i");
  const dropDownMenu = document.querySelector("#mobile-dropdown-menu");
  const srOnlySpan = toggleBtn.querySelector(".sr-only");

  if (toggleBtn && toggleBtnIcon && dropDownMenu) {
    toggleBtn.addEventListener("click", function () {
      const isOpen = dropDownMenu.classList.toggle("open");
      toggleBtnIcon.className = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
      toggleBtn.setAttribute("aria-expanded", isOpen);
      if (srOnlySpan) {
        srOnlySpan.textContent = isOpen ? "Close menu" : "Open menu";
      }
    });
  } else {
    console.error("One or more elements not found");
  }

  /* Creates contact-buttons */
  var part1 = "contact";
  var part2 = Math.pow(2, 6);
  var part3 = String.fromCharCode(part2);
  var part4 = "miiaarkko.fi";
  var part5 = part1 + String.fromCharCode(part2) + part4;

  var emailLink =
    "<a href='mailto:" +
    part5 +
    "' class='button email-button' aria-label='Contact me via Email'>Contact Me</a>";

  // Muutettu tämä rivi
  var cvLink =
    "<a href='Downloads/ICT_Resume_MA2024.pdf' class='button cv-button' download aria-label='Download CV'>Download CV</a>";

  document.getElementById("contact-buttons").innerHTML =
    emailLink + " " + cvLink;
});

/* Shows notification */
document.addEventListener("DOMContentLoaded", function () {
  const reveal = document.querySelector(".reveal");
  let isHidden = true; // Muutettu true:ksi
  function hideNotification() {
    reveal.classList.add("hidden");
    isHidden = true;
    reveal.setAttribute("aria-hidden", "true");
    if (!reveal.querySelector(".notification-icon")) {
      reveal.insertAdjacentHTML(
        "beforeend",
        '<div class="notification-icon" aria-hidden="true">!</div>'
      );
    }
  }
  function showNotification() {
    reveal.classList.remove("hidden");
    isHidden = false;
    reveal.setAttribute("aria-hidden", "false");
    const icon = reveal.querySelector(".notification-icon");
    if (icon) {
      icon.remove();
    }
  }
  // Hide notification on start
  hideNotification();
  // Toggle visibility on click
  reveal.addEventListener("click", function (event) {
    event.preventDefault();
    if (isHidden) {
      showNotification();
    } else {
      hideNotification();
    }
  });
  // Poistetaan turhat event listenerit
  reveal.removeEventListener("mouseenter", function () {});
  reveal.removeEventListener("mousemove", function () {});
});
