const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let userId = urlParams.get('id');

function formNewConv(formulaire) {

    return false;
}

function setColor() {
    $('#color').removeClass();
    $('#color').addClass($('#color').value);
}