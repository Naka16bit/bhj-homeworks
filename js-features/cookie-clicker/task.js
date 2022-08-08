let clickerCounter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let speedCounter = document.getElementById("speed__counter")
let counter = 0;
let speed = 0;
let start = new Date();

cookie.onclick = function() {
    counter++;
    clickerCounter.textContent = counter;

    counter % 2 ? cookie.width = 220 : cookie.width = 200;

    speed = counter / ((new Date() - start) / 1000);
    speedCounter.textContent = speed.toFixed(2);
}