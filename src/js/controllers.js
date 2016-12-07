//Clear
function reboot() {
    clearInterval(time1);
    clearInterval(time2);
}

function end() {
    if ((min == 0) && (sec == 0)) {
        reboot();
        return;
    }
}

function printSec() {
    if (sec < 10) {
        timerSec.innerHTML += sec;
    }
    timerSec.innerHTML = sec;
}
//Secondes
function decrementeSec() {
    if (tmp == true) {
        min--;
        tmp = false;
        timerMinute.innerHTML = min;
    }
    sec--;
    //timerSec.innerHTML = sec;
    printSec();
    end();
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
    tmp = true;

    if (state == false) {
        state = true;
    } else {
        reboot();
        sec = 60;
        timerSec.innerHTML = "00";
    }
    time1 = setInterval(decrementeSec, 1000);
    time2 = setInterval(decrementeMin, 61000);
}