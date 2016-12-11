/*------------------------HTML-----------------------*/
/*---------------------------------------------------*/
//bouton "Start"
var start = document.getElementById("start");
//bouton "Pause"
var pause = document.getElementById("pause");
//bouton "Stop"
var stop = document.getElementById("stop");
//affichage des indications
var notice = document.getElementById("notice");
//box contenant les minutes
var timerMinute = document.getElementById("minute");
//box contenant les secondes
var timerSec = document.getElementById("seconds");

/*------------------TEMPORAIRES----------------------*/
/*---------------------------------------------------*/
//temporaires contenant le nombre de minutes
var min = 0;
//temporaires contenant le nombre de secondes
var sec = 60;
//setIntervale pour les sec
var setTime;
//état du timer -> true: start - false: stop
var state = false;