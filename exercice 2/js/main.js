let colorChoice = document.getElementsByClassName("colored");
let colorChoosed = document.getElementById("colorChoosed");

for (let pigment of colorChoice) {
    pigment.addEventListener("click", function (){
        colorChoosed.style.backgroundColor = getComputedStyle(pigment).backgroundColor
    });

}
