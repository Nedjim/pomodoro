function stopTimer() {
    state = false;
    clearInterval(setTime);
    main();
}

function pauseTimer() {
    if (state = true) {
        state = false;
        clearInterval(setTime);
    }
}

function decrMin() {
    min--;
    timerMinute.innerHTML = min;
}

function decrSec() {
    sec--;
    timerSec.innerHTML = sec;
    if (min == 0 && sec == 0) {
        stopTimer();
    }
}

function timer() {
    if (state == false) {
        state = true;
    }

    switch (sec) {

        case 1:
            decrSec();
            timerMinute.innerHTML = min;
            sec = 60;
            break;
        case 60:
            decrMin();
            decrSec();
            break;
        default:
            decrSec();
            break;
    }
}

function startTimer() {
    timerMinute.innerHTML = min;
    setTime = setInterval(timer, 1000);
}