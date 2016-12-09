/*------------------------HTML-----------------------*/
/*---------------------------------------------------*/
//bouton "Start"
var start = document.getElementById("start");
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
var min;
var tmp; //test si on a déjà décrémenté la variable min
//temporaires contenant le nombre de secondes
var sec = 60;
//setIntervale pour min et sec
var time1, time2;
//état du timer -> true: start - false: stop
var state = false;