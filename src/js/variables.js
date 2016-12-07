var box = document.getElementsByClassName("box");
var timerMinute = document.getElementById("minute");
var timerSec = document.getElementById("seconds");

var min = 0;
var sec = 0;
var tmp;
var time1, time2;

function clear() {
    if ((min == 0) && (sec == 0)) {
        clearInterval(time1);
        clearInterval(time2);
    }
}

function decrementeSec() {
    if (tmp != 0) {
        min--;
        tmp = 0;
        timerMinute.innerHTML = min;
    }
    sec--;
    timerSec.innerHTML = sec;
    clear();
}

function decrementeMin() {
    sec = 60;
    min--;
    timerMinute.innerHTML = min;
}

function init() {
    timerMinute.innerHTML = min;
    sec = 60;
    tmp = min;
    time1 = setInterval(decrementeSec, 1000);
    time2 = setInterval(decrementeMin, 61000);
}

function testClass(e) {
    var element = e.target.className;

    switch (element) {
        case "box 25":
            min = 25;
            break;
        case "box 15":
            min = 15;
            break;
        case "box 5":
            min = 1; //mettre 5 min
            break;
        default:
            break;
    }
    init();
}

document.addEventListener("click", testClass);