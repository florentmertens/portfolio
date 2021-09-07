/* Nav Bar */

/* Show/Hide NavBar*/

const navBar = document.querySelectorAll("nav");
window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    navBar[1].style.opacity = "1";
    navBar[1].style.visibility = "visible";
  } else {
    navBar[1].style.opacity = "0";
    setTimeout(function () {
      navBar[1].style.visibility = "hidden";
    }, 1001);
  }
});
/* End Show/Hide NavBar*/

/* Active Current Element */

const arraySection = document.querySelectorAll(".section");
const arrayNavBarLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let currentElement = "";
  let sectionTop = "";
  let sectionMiddle = "";
  let i = 0;

  do {
    sectionTop = arraySection[i].offsetTop;
    if (arraySection[i].id != "myDiplomas") {
      sectionMiddle = arraySection[i].offsetHeight / 2;
    } else {
      sectionMiddle = 0;
    }
    i = i + 1;
  } while (pageYOffset > sectionTop + sectionMiddle);
  {
    currentElement = arraySection[i - 1].id;
  }

  arrayNavBarLi.forEach((a) => {
    a.classList.remove("active");
    if (a.attributes[0].nodeValue == "#" + currentElement) {
      a.classList.add("active");
    }
  });
});

/* End Active Current Element */

/* NavBar Hamburger */
window.onload = function () {
  const mobileMenu = document.querySelector(".mobileMenu");
  const menuBtn = document.querySelector(".hamburger");
  const arrayMobileLi = document.querySelectorAll("nav ul li");

  window.addEventListener("click", function () {
    menuBtn.classList.remove("is-active");
    mobileMenu.classList.remove("is-active");
  });

  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  arrayMobileLi.forEach((li) => {
    li.addEventListener("click", function () {
      menuBtn.classList.remove("is-active");
      mobileMenu.classList.remove("is-active");
    });
  });
};
/* End NavBar Hamburger */

/* End NavBar */

/* About Me */

/* My Profile */

const dateExperience = document.querySelector("#yearsExperience");
const newDate = new Date(dateExperience.innerHTML);
const dateNow = new Date();

if (document.readyState === "complete") {
  diffYears(newDate, dateNow);
} else {
  document.addEventListener("DOMContentLoaded", function () {
    diffYears(newDate, dateNow);
  });
}

function diffYears(newDate, dateNow) {
  resultDays = (dateNow.getTime() - newDate.getTime()) / 1000 / 60 / 60 / 24;
  if (resultDays < 30.417) {
    dateExperience.innerHTML = Math.trunc(resultDays) + " Jours";
  } else {
    resultMonth = resultDays / 30.417;
    if (resultMonth <= 12) {
      dateExperience.innerHTML = Math.trunc(resultMonth) + " Mois";
    } else if (resultMonth > 12) {
      resultYears = resultMonth / 12;
      dateExperience.innerHTML = Math.trunc(resultYears) + " Ans";
    }
  }
}

/* End My Profile */

/* My Skills */

const div = document.querySelector("#aboutMe");
window.addEventListener("scroll", () => {
  if (window.scrollY >= div.getBoundingClientRect().y) {
    const arrayProgressLine = document.querySelectorAll(".progress-line span");
    arrayProgressLine.forEach((line) => {
      if (line.className == "75") {
        line.style.animation = "progress-animation-75 5s forwards";
      }
      if (line.className == "70") {
        line.style.animation = "progress-animation-70 5s forwards";
      }
      if (line.className == "65") {
        line.style.animation = "progress-animation-65 5s forwards";
      }
      if (line.className == "60") {
        line.style.animation = "progress-animation-60 5s forwards";
      }
      if (line.className == "55") {
        line.style.animation = "progress-animation-55 5s forwards";
      }
    });
  }
});

/* End My Skylls */
