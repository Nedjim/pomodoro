function init(time) {
    min = time;
    timerMinute.innerHTML = min;
    console.log("yes");
    boxForm.style.display = "visible";
    notice.innerHTML = "Appuyez sur Start pour commencer";
}

function menu(e) {

    var element = e.target.className;
    notice.innerHTML = "Choisissez votre timing avant de commencer";

    switch (element) {
        case "box 25":
            init(25);
            break;
        case "box 15":
            init(15);
            break;
        case "box 5":
            init(5);
            break;
        default:
            min = 0;
            timerMinute.innerHTML = "00";
            timerSec.innerHTML = "00";
            start.removeEventListener("click", startTimer);
            pause.removeEventListener("click", pauseTimer);
            break;
    }
    //cycle.style.display = "none";
    main();
}

function main() {

    document.addEventListener("click", menu);

    if (min != 0) {
        start.addEventListener("click", startTimer);
        pause.addEventListener("click", pauseTimer);
        stop.addEventListener("click", stopTimer);
    }
}

window.onload = main;