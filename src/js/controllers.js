function pauseTimer() {
    document.removeEventListener("click", menu);
    state = false;
    clearInterval(setTime);
}

function stopTimer() {
    min = 0;
    sec = 60;
    pauseTimer();
    main();
}

function decrMin() {
    min--;
    timerMinute.innerHTML = min;
}

function decrSec() {
    sec--;
    timerSec.innerHTML = sec;
    if (min == 0 && sec == 0) {
        pauseTimer();
        main();
    }
}

function timer() {

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
    document.removeEventListener("click", menu);
    notice.innerHTML = " ";
    timerMinute.innerHTML = min;
    if (state == false) {
        state = true;
        setTime = setInterval(timer, 1000);
    }
}