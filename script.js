const targetScore = document.getElementById("targetScore");
const scoreA = document.getElementById("scoreA");
const scoreB = document.getElementById("scoreB");
const addA = document.getElementById("addA");
const addB = document.getElementById("addB");
const statusText = document.getElementById("statusText");
const resetBtn = document.getElementById("resetBtn");

let teamA = 0;
let teamB = 0;

addA.addEventListener("click", function () {
    teamA = teamA + 1;
    scoreA.textContent = teamA;
    checkWinner()
});

addB.addEventListener("click", function () {
    teamB = teamB + 1;
    scoreB.textContent = teamB;
    checkWinner()
});

function checkWinner() {
    const target = Number(targetScore.value);
    if (teamA >= target) {
        statusText.textContent = "Team A wins ";
    } else if (teamB >= target) {
        statusText.textContent = "Team B wins";
    }
};

resetBtn.addEventListener("click", function(){
    teamA = 0;
    teamB = 0;
    scoreA.textContent = teamA;
    scoreB.textContent = teamB;
    statusText.textContent = "";
});