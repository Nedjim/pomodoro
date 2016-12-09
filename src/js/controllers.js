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
    console.log("fonction decrSec -> Min = " + min);

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
    min--;
    timerMinute.innerHTML = min;
}

//Initialisation
function init() {

    console.log("Fonction init  : Min = " + min);

    if (min != 0) {
        timerMinute.innerHTML = min;
        tmp = true;
        console.log("tmp = " + tmp);

        if (state == false) {
            state = true;
            console.log("State = " + state);
        } else {
            reboot();
            sec = 60;
            timerSec.innerHTML = "00";
        }
        console.log("True: min = " + min + ":" + sec);
        time1 = setInterval(decrementeSec, 1000);
        time2 = setInterval(decrementeMin, 61000);

    } else {
        console.log("Echec -> retourn dans le main");
    }
}