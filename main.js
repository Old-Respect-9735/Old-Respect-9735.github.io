// this is a list remember idiot
let respondBtn = document.getElementById("respondbtn");
let moodBtns = document.getElementsByClassName("moodBtn"); 

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