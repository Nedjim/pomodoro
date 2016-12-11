function menu(e) {

    var element = e.target.className;

    switch (element) {
        case "box 25":
            min = 25;
            timerMinute.innerHTML = min;
            break;
        case "box 15":
            min = 15;
            timerMinute.innerHTML = min;
            break;
        case "box 5":
            min = 1;
            timerMinute.innerHTML = min;
            break;
        default:
            main();
    }
    notice.innerHTML = "Appuyez sur Start pour commencer";
}

function main() {
    notice.innerHTML = "Choisissez votre timing avant de commencer";
    document.addEventListener("click", menu);
    start.addEventListener("click", startTimer);
    pause.addEventListener("click", pauseTimer);
}

window.onload = main;