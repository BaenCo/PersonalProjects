window.red = 0;
window.green = 0;
window.blue = 0;
function func_1(value) {
    window.red = value;
    change_bg();
}
function func_2(value) {
    window.green = value;
    change_bg();
}
function func_3(value) {
    window.blue = value;
    change_bg();
 
}
function change_bg() {
    document.getElementById("output").innerHTML = +window.red+", "+window.green+", "+window.blue;
    document.body.style.backgroundColor = "rgb("+window.red+","+window.green+","+window.blue+")";
}