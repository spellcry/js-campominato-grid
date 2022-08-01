// funzione che crea uno square
// restituisce un dom element
function getSquareElement() {
    const square = document.createElement('div');
    square.className = 'square';
    return square; 
}

// funzione che gestisce il click
function clickHandler(event) {
    const square = this;
    square.classList.toggle('clicked');
    console.log(square.innerHTML);
}

// funzione che cancella la tabella precedente
// ed elimina gli eventListener
function resetTabella(tabellone) {
    let tabChild = tabellone.firstChild;
    while ( tabChild != null ) {
        tabChild.removeEventListener('click', clickHandler);
        tabChild = tabChild.nextElementSibling;
    }
    tabellone.innerHTML = '';
}

// funzione che genera una lista
function generaLista() {
    // preparo le variabili
    const tabelloneEl = document.querySelector('.tabellone');
    resetTabella(tabelloneEl);
    const difficulty = document.querySelector('.main-header__difficulty').value;
    let numCelleRiga = 7;
    if ( difficulty === '1' ) {
        numCelleRiga = 10;
    }
    if ( difficulty === '2' ) {
        numCelleRiga = 9;
    }
    const numCelleTot = numCelleRiga ** 2;
    // setto lo stile in base al numero di celle per una riga
    tabelloneEl.style.gridTemplateColumns = `repeat(${numCelleRiga}, 1fr)`;
    // genero lista
    for ( let i = 0; i < numCelleTot; i++ ) {
        const squareEl = getSquareElement();
        squareEl.append(i + 1);
        squareEl.addEventListener('click', clickHandler);
        tabelloneEl.append(squareEl);
    }
}

const playEl = document.querySelector('.main-header__btn');
playEl.addEventListener('click', generaLista);