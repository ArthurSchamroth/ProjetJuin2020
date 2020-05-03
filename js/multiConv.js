//Auteur : François Girondin
$(document).on('InitOver', initConvs);
$(document).on('InitOver', initLinks);

function initConvs() {
    créerListeConvs();
    actualiserNomPage();
}

function initLinks() {
    $('.link').click(goToLink);
}

function créerListeConvs() {
    $.get(`userConvs?userId=${session.userId}`,(convs) => {
        let liste = '';
        convs.forEach(conv => {
            liste += `<div class="convListe convListeBox ${conv.couleur}" id="${conv.id}" href="./play.html?id=${conv.id}">${conv.nom}</div>`;
        });
        document.getElementById('listeConvs').innerHTML = liste + '<div id=\"ajouterConv\" class=\"convListeBox\">Nouvelle conversation</div>';
        $('.convListe').click(goToConv);
        $('#ajouterConv').click(creerConv);
    });
}

function goToConv(event) {
    window.location = event.target.getAttribute('href');
}

function goToLink(event) {
    window.location = event.target.getAttribute('href');
}

function actualiserNomPage() {
    let getName = new XMLHttpRequest;
    getName.open('get', `getName?id=${session.convUserId}`,true);
    getName.onload = () => {
        document.title = getName.responseText;
    }
    getName.send();
}

function creerConv() {
    window.location = './new.html';
}