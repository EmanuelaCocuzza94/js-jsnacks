console.log('Inizio Snack 10');

// Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
// Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.

let numeroPrecedente; //*undefined
let numeroCorrente = parseInt(prompt('Inserisci numero'));

while(numeroCorrente !== numeroPrecedente) {
    numeroPrecedente = numeroCorrente;
    numeroCorrente = parseInt(prompt('Inserisci numero'));
    console.log(numeroPrecedente, numeroCorrente);
}

console.log(numeroPrecedente, numeroCorrente);


