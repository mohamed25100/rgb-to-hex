var a = document.getElementById("randomRGB");
var result = "#" + a.textContent;
function randomColor() {
    document.body.style.background = result ;
}
function refreshPage(){
    location.href = "/index.php";
} 