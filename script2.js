//script.js
function openPopup(overlay) {
    document.getElementById('overlay').style.display = 'flex';
}

function closePopup(overlay) {
    document.getElementById('overlay').style.display = 'none';
}

// Chiudi il pop-up quando l'utente clicca fuori dal contenuto del pop-up
window.onclick = function(event) {
    let popups = document.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
        if (event.target == popups[i]) {
            popups[i].style.display = 'none';
        }
    }
}



function openPopup1(overlay1) {
    document.getElementById('overlay1').style.display = 'flex';
}

function closePopup1(overlay1) {
    document.getElementById('overlay1').style.display = 'none';
}

function openPopup2(overlay2) {
    document.getElementById('overlay2').style.display = 'flex';
}

function closePopup2(overlay2) {
    document.getElementById('overlay2').style.display = 'none';
}



function openPopup3(overlay3) {
    document.getElementById('overlay3').style.display = 'flex';
}

function closePopup3(overlay3) {
    document.getElementById('overlay3').style.display = 'none';
}


function openPopup4(overlay4) {
    document.getElementById('overlay4').style.display = 'flex';
}

function closePopup4(overlay4) {
    document.getElementById('overlay4').style.display = 'none';
}


function openPopup5(overlay5) {
    document.getElementById('overlay5').style.display = 'flex';
}

function closePopup5(overlay5) {
    document.getElementById('overlay5').style.display = 'none';
}


function openPopup6(overlay6) {
    document.getElementById('overlay6').style.display = 'flex';
}

function closePopup6(overlay6) {
    document.getElementById('overlay6').style.display = 'none';
}



function openPopup7(overlay7) {
    document.getElementById('overlay7').style.display = 'flex';
}

function closePopup7(overlay7) {
    document.getElementById('overlay7').style.display = 'none';
}



