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
            return;
    }
    init();
}

document.addEventListener("click", main);

//1 - Choisir Start ou stop
//2 - Si start : choisir le timing
//3 - Faire des cycle avec 5 min de pauses