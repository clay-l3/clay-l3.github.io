document.getElementById("house").onclick = function () { myFunction(); };
function myFunction() {
    document.getElementById("body").style.backgroundColor = "rgb(10, 119, 209)"
}

document.getElementById("zombie").oncontextmenu = function () { zombieHide(); };
function zombieHide() {
    document.getElementById("zombie").style.visibility = "hidden"
    document.getElementById("human").style.visibility = "visible"
}

document.getElementById("text").onclick = function () { nightHide(); };
function nightHide() {
    document.getElementById("night").style.visibility = "hidden"
    document.getElementById("day").style.visibility = "visible"
}

