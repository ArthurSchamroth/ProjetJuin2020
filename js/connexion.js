document.addEventListener('DOMContentLoaded', initPage);

function initPage() {
    let formulaire = document.getElementById("formulaireConnexion");
    formulaire.addEventListener("submit", soumettreForm);
}


function soumettreForm(event) {
    event.preventDefault();
    let informations = this;
    envoyerEmail(informations.idEmail.value, informations.motPasse.value);
}

//
function envoyerEmail(emailVerif, mdpVerif) {
    let connexion = new XMLHttpRequest();
    connexion.open('get', 'connexion?emailVerif=' + emailVerif, true);
    connexion.onload =
        function testMdp() {
            let mdp = JSON.parse(connexion.response);
            verif = false;
            while (!(verif)) {
                if (mdp == mdpVerif) {
                    verif = 1;
                }
                else {
                    document.getElementById("erreur").innerText = "Email ou mot de passe éronné! Réessayer.";
                }
            }
        };
    connexion.send();
}

