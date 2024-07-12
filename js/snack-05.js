console.log('Inizio Snack 5');

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l’array alla fine.

const numeroDispari = [];

// Chiedi per 6 volte all'utente di inserire un numero lo svolgiamo con il ciclo for

for (let i = 0 ; i < 6 ; i ++) {
    // dobbiamo chiedere un numero con il prompt
    const numero = parseInt(prompt('Inserisci un numero qualsiasi'));
    console.log(numero);
    // il numero è dispari se il resto = 1 o diverso da 0 , il numero è dispari perchè il resto della divisione per 2 è dispari
if(numero % 2 !== 0){
    numeroDispari.push(numero);
}

}

console.log(numeroDispari);