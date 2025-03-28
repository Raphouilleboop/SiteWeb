// Fonction pour mettre à jour les quantités en fonction du nombre de personnes
function updateRecipe() {
    const people = parseInt(document.getElementById('people').value);

    // Quantités par personne
    let laitPerPerson = 1/8; // en littre
    let oeufPerPerson = 6/8;
    let sucrePerPerson = 100/8; // en grammes
    let caramelPerPerson = 100/8; // en gramme

    // Calcul des quantités totales en fonction du nombre de personnes
    let totaloeuf = Math.ceil(oeufPerPerson * people); // Les œufs doivent être un entier
    let totallait = laitPerPerson * people;
    let totalsucre = sucrePerPerson * people;
    let totalcaramel = caramelPerPerson * people;

    // Mise à jour de l'affichage des ingrédients
    document.getElementById('lait').innerText = Math. round((totallait)*10)/10;
    document.getElementById('oeuf').innerText = Math. round(totaloeuf);
    document.getElementById('sucre').innerText = Math. round(totalsucre);
    document.getElementById('caramel').innerText = Math. round(totalcaramel);
}

// Initialisation de la page avec la valeur par défaut (8 personnes)
window.onload = function() {
    // Définir la valeur par défaut de la liste déroulante à 8
    document.getElementById('people').value = '8';
    generer_ingredient(); // Appeler la fonction pour mettre à jour les quantités
};