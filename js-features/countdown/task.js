let timer = document.getElementById("timer");
let counter = timer.textContent;

function countDown() {   
    if (counter !== 0) {
        counter--;
        timer.textContent = counter;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(id);
    }    
}

let id = setInterval(countDown, 1000);


let timer2 = document.getElementById("timer2");
let time = timer2.textContent.split(":");
let date = new Date();
date.setHours(time[0], time[1], time[2], 0);


function formatTime() {
    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;
    let min = date.getMinutes();
    if (min < 10) min = `0${min}`;
    let sec = date.getSeconds();
    if (sec < 10) sec = `0${sec}`;
    let formatedTime = `${hours}:${min}:${sec}`;
    return formatedTime;
}

function countDown2() {
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hours !== 0 || min !== 0 || sec !== 0) {
        date = new Date(date - 1000);
        timer2.textContent = formatTime();
    } else {
        alert("Надо же! Вы опять победили в конкурсе!");
        clearInterval(id2);
    }
}

let id2 = setInterval(countDown2, 1000);