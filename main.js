// side nav bar toggle
let hide = document.getElementById("hide")
let sideNavBar = document.getElementById("sideNav")
var toggleStatus = 1;

document.getElementById("icon").addEventListener("click", function toggleNav() {
  if (toggleStatus == 1) {
    hide.style.height = "100vh";
    sideNavBar.style.width = "0";
    if (window.innerWidth > 1460) {
      moveLeft();
    }
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    hide.style.height = "0vh";
    sideNavBar.style.width = "20rem";
    if (window.innerWidth > 1460) {
      moveRight();
    }
    toggleStatus = 1;
  }
});

//body shift on nav open

let mainBody = document.getElementById("mainbody")

function moveRight() {
  mainBody.style.marginLeft = "20rem";
}

function moveLeft() {
  mainBody.style.marginLeft = "0rem";
}

// top nav bar toggle

let topNavBar = document.getElementById("topNav")
let nameHeader = document.getElementById("name")

var toggleStatusTop = 0;

document
  .getElementById("iconTopNav")
  .addEventListener("click", function toggleTopNav() {
    if (toggleStatusTop == 1) {
      topNavBar.style.opacity = "0";
      topNavBar.style.height = "0px";
      topNavBar.style.width = "0px";
      nameHeader.style.animation = "none";
      toggleStatusTop = 0;
    } else if (toggleStatusTop == 0) {
      topNavBar.style.height = "600px";
      topNavBar.style.width = "600px";
      setTimeout(function() {
        topNavBar.style.opacity = "1";
      }, 200);
      setTimeout(function() {
        nameHeader.style.animation = " lights 5s 750ms linear infinite";
      }, 200);
      
      toggleStatusTop = 1;
    }
  });


  
// top nav bar toggle off on anchor click
function navClick() {
  topNavBar.style.height = "0vh";
  topNavBar.style.width = "0vh";
  toggleStatusTop = 0;
}


//toggle theme
let stylesheet = document.getElementById("pagestyle")
let themeSun = document.getElementById("sun")
let themeMoon =  document.getElementById("moon")

let theme = 1;

document.getElementById("themebtns").addEventListener("click", () => {
  if (theme == 1) {
    stylesheet.setAttribute("href", "lighttheme.css");
    themeSun.style.display = "block";
   themeMoon.style.display = "none";
    theme = 2;
  } else if (theme == 2) {
    stylesheet.setAttribute("href", "darktheme.css");
    themeMoon.style.display = "block";
    themeSun.style.display = "none";
    theme = 1;
  }
});


//toggle top theme

let topSun = document.getElementById("topsun")
let topMoon = document.getElementById("topmoon")

let themeTop = 1;
document.getElementById("themebtnsTop").addEventListener("click", () => {
  if (themeTop == 1) {
   stylesheet.setAttribute("href", "lighttheme.css");
    topSun.style.display = "block";
    topMoon.style.display = "none";
    themeTop = 2;
  } else if (themeTop == 2) {
   stylesheet.setAttribute("href", "darktheme.css");
    topMoon.style.display = "block";
    topSun.style.display = "none";
    themeTop = 1;
  }
});

//test themes side nav


document.getElementById("darkbluetheme").addEventListener("click", () => {
  stylesheet.setAttribute("href", "styles.css");
});
document.getElementById("orangetheme").addEventListener("click", () => {
  stylesheet.setAttribute("href", "peach.css");
});
document.getElementById("greytheme").addEventListener("click", () => {
  stylesheet.setAttribute("href", "greytheme.css");
});

//test themes top nav
document.getElementById("darkbluethemetop").addEventListener("click", () => {
  stylesheet.setAttribute("href", "styles.css");
});
document.getElementById("orangethemetop").addEventListener("click", () => {
  stylesheet.setAttribute("href", "peach.css");
});
document.getElementById("greythemetop").addEventListener("click", () => {
  stylesheet.setAttribute("href", "greytheme.css");
});




//reveal on scroll

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      return;
    }
  }
}


window.addEventListener("scroll", reveal);


function revealSide() {
  var reveals = document.querySelectorAll(".revealSide");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("activeSide");
    } else {
      return;
    }
  }
}

window.addEventListener("scroll", revealSide);


