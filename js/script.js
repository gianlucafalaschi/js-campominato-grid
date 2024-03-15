/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

// quando l'utente preme il pulsante play si genera una griglia 
/* const playButton = document.querySelector('#play-button');
console.log(playButton);
playButton.addEventListener('click', function() {
    // la griglia diventa visibile aggiungendo una classe
    const mainGrid = document.querySelector('#grid');
    mainGrid.classList.toggle('active');


}); */

const nuovoQuadrato = generateSquare(1);

//per 100 volte creare un quadratino e ogni quadratino si aggiunge alla 
// griglia grid

// Quando il quadratino viene cliccato si colora di azzurro e
// viene emesso un messaggio in console con il numero del quadratino cliccato



// FUNCTIONS

// Funzione che genera un quadrato
// number -> numero che rappresenta un numero
// return: elemento del DOM che rappresenta un quadrato

function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;
    console.log(newSquare)
}