var box25 = document.getElementsByClassName("box")[0];
var box15 = document.getElementsByClassName("box")[1];
var box5 = document.getElementsByClassName("box")[2];

function test() {
    console.log("click");
}

box25.addEventListener("click", test);
box15.addEventListener("click", test);
box5.addEventListener("click", test);