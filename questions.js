// navbar event listeners
document.getElementById("other").addEventListener("click", function() {
    location.href = "bubblesgame.html";
});
document.getElementById("home").onclick = (e) => {
    location.href = "main.html";
}

document.getElementById("submitBtn").addEventListener("click", function() {
    let cumScore = 0;
    let dScore = 0;
    let sScore = 0;
    let aScore = 0;
    let answers = document.getElementsByClassName("questionBlock");
    for (let i = 0; i < answers.length; i++) {
        let ans = answers[i];
        if (ans.className == "question d") {
            dScore += parseInt(ans.value);
        }
        else if (ans.className == 'question a') {
            aScore += parseInt(ans.value);
        }
        else {
            sScore += parseInt(ans.value);
        }
    }

    // location.href = "main.html";
    cumScore = (dScore + sScore + aScore)/3;
    localStorage.setItem("dScore", dScore);
    localStorage.setItem("aScore", aScore);
    localStorage.setItem("sScore", sScore);
    localStorage.setItem("mentalScore", cumScore);
    console.log(localStorage.getItem("mentalScore"));
});