// navbar event listeners
document.getElementById("other").addEventListener("click", function() {
    location.href = "bubblesgame.html";
});
document.getElementById("home").onclick = (e) => {
    location.href = "index.html";
}

document.getElementById("submitBtn").addEventListener("click", function() {
    sessionStorage.setItem("mentalScore", 0);
    sessionStorage.setItem("aScore", 0);
    sessionStorage.setItem("dScore", 0);
    sessionStorage.setItem("sScore", 0);
    let cumScore = 0;
    let dScore = 0;
    let sScore = 0;
    let aScore = 0;
    let dAns = document.getElementsByClassName("questionBlock d");
    let sAns = document.getElementsByClassName("questionBlock s");
    let aAns = document.getElementsByClassName("questionBlock a");
    for (let i = 0; i < dAns.length; i++) {
        dScore += parseInt(dAns[i].value);
    }
    dScore *= 2;
    for (let i = 0; i < sAns.length; i++) {
        sScore += parseInt(sAns[i].value);
    }
    sScore *= 2;
    for (let i = 0; i < aAns.length; i++) {
        aScore += parseInt(aAns[i].value);
    }
    aScore *= 2;
    cumScore = 1000 - Math.round((dScore + sScore + aScore) * 1000/138);
    sessionStorage.setItem("dScore", dScore);
    sessionStorage.setItem("aScore", aScore);
    sessionStorage.setItem("sScore", sScore);
    sessionStorage.setItem("mentalScore", cumScore);
    location.href = "index.html";
});