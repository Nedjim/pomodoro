/*---------------------VARIABLES---------------------- */
//var validation = document.getElementById("validation");
var reg = "[1-9][0-9]*";

/*--------------------FUNCTIONS-----------------------*/
// function test() {

//     var number = document.formCycle.number.value;
//     var pauseTime = document.formCycle.pauseTime.value;

//     document.removeEventListener("click", menu);
//     validation.addEventListener("click", test);

//     if (number.match(reg) && pauseTime.match(reg)) {
//         alert("number = " + number + "pause = " + pauseTime);
//         return true;
//     } else {
//         alert("Erreur de saisit");
//         return false;
//     }
// }

function test2() {
    alert("Function test 2");

}
boxForm = document.getElementById("boxForm");

boxForm.addEventListener("submit", test2);