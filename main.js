// this is a list remember idiot
let respondBtn = document.getElementById("respondbtn");
let moodBtns = document.getElementsByClassName("moodBtn"); 
let media = document.getElementsByClassName("media")[0];

if (sessionStorage.getItem("mentalScore") == null) {
    media.style.filter = "blur(10px)";
}
else if (sessionStorage.getItem("mentalScore") != null) {
    media.style.filter = "none";
    document.getElementById("notice").style.display = "none";
}

var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }

document.getElementById("other").onclick = (e) => {
    location.href = "bubblesgame.html";
}
document.getElementById("home").onclick = (e) => {
    location.href = "main.html";
}

respondBtn.onclick = (e) => {
    location.href = "questions.html";
}

// sad
moodBtns[0].onclick = (e) => {
    if (getComputedStyle(document.getElementById("mood")).opacity == 1) {
        // do stuff
    }
}
// neutral
moodBtns[1].onclick = (e) => {
    if (getComputedStyle(document.getElementById("mood")).opacity == 1) {
        // do stuff
    }
}
// happy
moodBtns[2].onclick = (e) => {
    if (getComputedStyle(document.getElementById("mood")).opacity == 1) {
        // do stuff
    }
}