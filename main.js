// this is a list remember idiot
let respondBtn = document.getElementById("respondbtn");
let moodBtns = document.getElementsByClassName("moodBtn"); 

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
    document.getElementById("mood").classList.toggle("fade");
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