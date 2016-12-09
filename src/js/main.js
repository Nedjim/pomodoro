function menu(e) {

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
            /* min = 0;*/
            main();
    }
    if (min == 0) {
        main();
    } else {
        notice.innerHTML = "Appuyez sur Start pour commencer";
        //start.addEventListener("click", init);

    }
}

function main() {
    console.log("Main min = " + min);
    notice.innerHTML = "Choisissez votre timing avant de commencer";
    document.addEventListener("click", menu);
    start.addEventListener("click", init);
}

window.onload = main;