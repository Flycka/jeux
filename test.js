// Génère un nombre de 0 à 9 exclus.
const Max_Value = 1000
var myst = Math.floor(Math.random() * (Max_Value+1));
var nbCoups = 0;

// Fonction permettant de vérifier la saisie de l'utilisateur.
function check() {
    nbCoups++;
    var saisie = document.getElementById("saisie").value;
    console.log(myst); 
        if (saisie < 0 ||  saisie> Max_Value) document.getElementById("info")
                .innerHTML =`La valeur doit etre comprise entre 0 et ${Max_Value}`; 
        else if (isNaN(parseInt(saisie))) document.getElementById("info")
                .innerHTML = "Valeur entière attendue";        
        else if (saisie > myst) document.getElementById("info")
        .innerHTML = "Trop grand !";
        else if (saisie < myst) document.getElementById("info")
        .innerHTML = "Trop petit !";        
        else document.getElementById("info")
        .innerHTML = "Bravo vous avez trouvé en " +
        nbCoups + " coups";
}