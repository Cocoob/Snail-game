// Déclaration des variables : 
var a,b;

// Récupération des éléments du DOM : 
const colorDice1 = document.querySelector('.color-div1');
const colorDice2 = document.querySelector('.color-div2');
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple']
// Génération de couleur quand on presse la touche espace du clavier : 
var randomColor = document.addEventListener('keydown', function(e){
    if(e.keyCode === 32){
        // On génère une valeur aléatoire parmis les couleurs du tableau
        a = changeBackground();
        b = changeBackground2();
    }
});

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
colorDice1.style.backgroundColor = colors[colorIndex];
}

function changeBackground2(){
const colorIndex= parseInt(Math.random()*colors.length)
colorDice2.style.backgroundColor = colors[colorIndex];
}

