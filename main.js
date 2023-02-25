// side nav bar toggle

var toggleStatus = 1;

document.getElementById("icon").addEventListener("click", function toggleNav() {
  if (toggleStatus == 1) {
    document.getElementById("hide").style.height = "100vh";
    document.getElementById("sideNav").style.width = "0";
    if (window.innerWidth > 1460) {
      moveLeft();
    }
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    document.getElementById("hide").style.height = "0vh";
    document.getElementById("sideNav").style.width = "20rem";
    if (window.innerWidth > 1460) {
      moveRight();
    }
    toggleStatus = 1;
  }
});

function moveRight() {
  document.getElementById("mainbody").style.marginLeft = "20rem";
}

function moveLeft() {
  document.getElementById("mainbody").style.marginLeft = "0rem";
}

// top nav bar toggle
var toggleStatusTop = 0;

document
  .getElementById("iconTopNav")
  .addEventListener("click", function toggleTopNav() {
    if (toggleStatusTop == 1) {
      document.getElementById("topNav").style.opacity = "0";
      document.getElementById("topNav").style.height = "0px";
      document.getElementById("topNav").style.width = "0px";
      document.getElementById("name").style.animation = "none";
      toggleStatusTop = 0;
    } else if (toggleStatusTop == 0) {
      document.getElementById("topNav").style.height = "600px";
      document.getElementById("topNav").style.width = "600px";
      setTimeout(function () {
        document.getElementById("topNav").style.opacity = "1";
      }, 200);
      setTimeout(function () {
        document.getElementById("name").style.animation =
          " lights 5s 750ms linear infinite";
      }, 200);
      toggleStatusTop = 1;
    }
  });

// top nav bar toggle off on anchor click
function navClick() {
  document.getElementById("topNav").style.height = "0vh";
  document.getElementById("topNav").style.width = "0vh";
  toggleStatusTop = 0;
}

//toggle theme
let theme = 1;

document.getElementById("themebtns").addEventListener("click", () => {
  if (theme == 1) {
    document.getElementById("pagestyle").setAttribute("href", "lighttheme.css");
    document.getElementById("sun").style.display = "block";
    document.getElementById("moon").style.display = "none";
    theme = 2;
  } else if (theme == 2) {
    document.getElementById("pagestyle").setAttribute("href", "darktheme.css");
    document.getElementById("moon").style.display = "block";
    document.getElementById("sun").style.display = "none";
    theme = 1;
  }
});

let themeTop = 1;
document.getElementById("themebtnsTop").addEventListener("click", () => {
  if (themeTop == 1) {
    document.getElementById("pagestyle").setAttribute("href", "lighttheme.css");
    document.getElementById("topsun").style.display = "block";
    document.getElementById("topmoon").style.display = "none";
    themeTop = 2;
  } else if (themeTop == 2) {
    document.getElementById("pagestyle").setAttribute("href", "darktheme.css");
    document.getElementById("topmoon").style.display = "block";
    document.getElementById("topsun").style.display = "none";
    themeTop = 1;
  }
});

//test themes side nav
document.getElementById("darkbluetheme").addEventListener("click", () => {
  document.getElementById("pagestyle").setAttribute("href", "styles.css");
});
document.getElementById("orangetheme").addEventListener("click", () => {
  document.getElementById("pagestyle").setAttribute("href", "peach.css");
});
document.getElementById("greytheme").addEventListener("click", () => {
  document.getElementById("pagestyle").setAttribute("href", "greytheme.css");
});

//test themes top nav
document.getElementById("darkbluethemetop").addEventListener("click", () => {
  document.getElementById("pagestyle").setAttribute("href", "styles.css");
});
document.getElementById("orangethemetop").addEventListener("click", () => {
  document.getElementById("pagestyle").setAttribute("href", "peach.css");
});
document.getElementById("greythemetop").addEventListener("click", () => {
  document.getElementById("pagestyle").setAttribute("href", "greytheme.css");
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

//nav active link

// function activelink() {
//   var reveals = document.querySelectorAll(".activeTab");
//   var activenavlink = document.querySelectorAll(".activesidenavlink");

//   for (var i = 1; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;
//     let flag = 0;
//     if (elementTop < windowHeight - elementVisible) {
//       activenavlink[i].classList.add("activeLoad");
//       flag=1;
//       if(flag==1){
//         activenavlink[i-1].classList.remove("activeLoad")
//       }else{
//         return;
//       }

//     } else {
//       activenavlink[i].classList.remove("activeLoad");
//     }
//   }
// }

// window.addEventListener("scroll", activelink);
