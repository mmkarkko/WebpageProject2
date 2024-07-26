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

/* Creates contact-buttons */
document.addEventListener("DOMContentLoaded", function () {
  var part1 = "contact";
  var part2 = Math.pow(2, 6);
  var part3 = String.fromCharCode(part2);
  var part4 = "miiaarkko.fi";
  var part5 = part1 + String.fromCharCode(part2) + part4;

  var emailLink =
    "<a href='mailto:" + part5 + "' class='button email-button'>Contact Me</a>";
  var cvLink =
    "<a href='/download_cv.php' class='button cv-button' rel='noopener noreferrer'>Download CV</a>";

  document.getElementById("contact-buttons").innerHTML =
    emailLink + " " + cvLink;
});

/* Shows andthe notification */
document.addEventListener("DOMContentLoaded", function () {
  const reveal = document.querySelector(".reveal");
  let isHidden = true;

  function hideNotification() {
    reveal.classList.add("hidden");
    isHidden = true;
    if (!reveal.querySelector(".notification-icon")) {
      reveal.insertAdjacentHTML(
        "beforeend",
        '<div class="notification-icon">!</div>'
      );
    }
  }

  function showNotification() {
    reveal.classList.remove("hidden");
    isHidden = false;
    const icon = reveal.querySelector(".notification-icon");
    if (icon) {
      icon.remove();
    }
  }

  // Piilotetaan ilmoitus heti alussa ja lisätään huutomerkki-ikoni
  hideNotification();

  reveal.addEventListener("click", function (event) {
    event.preventDefault();
    if (isHidden) {
      showNotification();
    } else {
      hideNotification();
    }
  });
});
