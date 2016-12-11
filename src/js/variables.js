/*------------------------HTML-----------------------*/
/*---------------------------------------------------*/
//bouton "Start"
var start = document.getElementById("start");
//bouton "Stop"
var pause = document.getElementById("pause");
//affichage des indications
var notice = document.getElementById("notice");
//box contenant les minutes
var timerMinute = document.getElementById("minute");
//box contenant les secondes
var timerSec = document.getElementById("seconds");

/*------------------TEMPORAIRES----------------------*/
/*---------------------------------------------------*/
//temporaires contenant le nombre de minutes
var min;
//temporaires contenant le nombre de secondes
var sec = 60;
//setIntervale pour les sec
var setTime;
//état du timer -> true: start - false: stop
var state = false;