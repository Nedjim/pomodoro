//Récupération des variables
var timerMinute = document.getElementById("minute");
var timerSec = document.getElementById("seconds");

//Variables temporaires
var min, sec;
var tmp;
var time1, time2; //setIntervale
var state = false; //état du timer

//Clear
function clear() {
    if ((min == 0) && (sec == 0)) {
        clearInterval(time1);
        clearInterval(time2);
        return;
    }
}

//Secondes
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

//Minutes
function decrementeMin() {
    sec = 60;
    min--;
    timerMinute.innerHTML = min;
}

//Initialisation
function init() {
    timerMinute.innerHTML = min;
    sec = 60;
    tmp = min;
    if (state == false) {
        state = true;
    } else {
        clearInterval(time1);
        clearInterval(time2);
        sec = 60;
        timerSec.innerHTML = "00";
    }
    time1 = setInterval(decrementeSec, 1000);
    time2 = setInterval(decrementeMin, 61000);
}

//Menu
function main(e) {

    var element = e.target.className;

    switch (element) {
        case "box 25":
            min = 25;
            break;
        case "box 15":
            min = 15;
            break;
        case "box 5":
            min = 5;
            break;
        default:
            break;
    }
    init();
}

document.addEventListener("click", main);