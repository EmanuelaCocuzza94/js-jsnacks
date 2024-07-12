console.log('Inizio Snack 6');

// Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. 
// Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso

// 1 Generare numero random:

const numeroPC = Math.floor(Math.random() * 11);
console.log(numeroPC);

// 2 Chiedi all'utente di inserire un suo numero:

const numeroUtente = parseInt(prompt('Indovina il numero che sto pensando da 0 a 10'));
console.log(numeroUtente);

// Ora se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso: con if

if(numeroUtente === numeroPC){
    console.log('Hai vinto!')
} else {
    console.log('Hai perso!')
}