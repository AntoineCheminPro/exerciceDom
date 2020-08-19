// récuperation de l'ID mainTitle puis ajout d'un titre
let mainTitle = document.getElementById("mainTitle");
mainTitle.innerText = "Exercice Bootstrap DOM";

// récupération de l'ID subtitle et ajkout d'un sous-titre
let subTitle = document.getElementById("subTitle");
subTitle.innerText = "DOM = Document Object Model";

// récupération des élément de classe content pour leur ajouter un fond bleu
let classContent = document.getElementsByClassName("content");
for (let content of classContent) {
    content.style.backgroundColor = "lightblue";
}

function deleteContent(){
    let doitDisparaitre =document.getElementsByTagName("h3")[0];
    doitDisparaitre.innerText="";
}