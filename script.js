// Déclaration des variables : 
var a, b, c, nouveauCode;

// Récupération des éléments du DOM : 
var colorDiv = document.querySelector('.color-div');
var colorCode = document.querySelector('.color-code');

// Génération de couleur quand on presse la touche espace du clavier : 
var codeRGB = document.addEventListener('keydown', function(e){
    if(e.keyCode === 32){
        // On génère trois valeurs aléatoires pour chacune des trois valeurs r g et b
        a = valeurAleatoire();
        b = valeurAleatoire();
        c = valeurAleatoire();

        // Stockage de la valeur du code rgb :
        nouveauCode = 'rgb(' + a + ',' + b + ',' + c + ')';

        // Mise à jour des éléments du DOM : 
        colorDiv.style.backgroundColor = nouveauCode;
        colorCode.textContent = nouveauCode;
    }
});

function valeurAleatoire(){
    return Math.floor(Math.random()*256);
}
