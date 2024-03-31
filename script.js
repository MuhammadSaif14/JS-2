
const PI = 3.14159;
let radius;
let cercumtences;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    cercumtences = 2 * PI * radius;
    document.getElementById("myH3").textContent = cercumtences;
}