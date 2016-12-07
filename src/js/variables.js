var box = document.getElementsByClassName("box");

var timerMinute = document.getElementById("minute");
var timerSec = document.getElementById("seconds");

var min = 0;
var sec = 0;

function init() {
    timerMinute.innerHTML = min;
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
            min = 5;
            break;
        default:
            break;
    }

    init();
}
document.addEventListener("click", testClass);