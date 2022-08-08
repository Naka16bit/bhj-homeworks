let deadMolesCounter = document.getElementById("dead").textContent;
let lossesCounter = document.getElementById("lost").textContent;
let holes = [];

for (let i = 1; i < 10; i++) {
    holes[i - 1] = document.getElementById("hole" + i);
}

for (let hole of holes) {
    hole.onclick = () => {
        counters(hole);
        endOfGame();
    }
}

let counters = (hole) => {
    if (hole.classList.contains( 'hole_has-mole' )) {
        deadMolesCounter++;
    } else {
        lossesCounter++;
    }
    document.getElementById("dead").textContent = deadMolesCounter;
    document.getElementById("lost").textContent = lossesCounter;
}

let endOfGame = () => {
    if (deadMolesCounter === 10) {
        alert("You're a serial killer, visit a psychologist");
        clearCounters();
    }
    if (lossesCounter === 5) {
        alert("You're a looser, but moles're alive");
        clearCounters();
    }
}

let clearCounters = () => {
    deadMolesCounter = 0;
    lossesCounter = 0;
    document.getElementById("dead").textContent = deadMolesCounter;
    document.getElementById("lost").textContent = lossesCounter;
}