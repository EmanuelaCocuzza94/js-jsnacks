console.log('Inizio Snack 7');

// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito, 
// e stampare tutta la tabellina del 2 fino al numero inserito.

// 1 Scrivere un programma che stampi la tabellina del 2, fino al numero 1000:

// const numeroMax = 1000
// const numeroInterazioni = 1000/2

// for ( let i = 0 ; i< numeroInterazioni + 1; i ++){
//     console.log('2*' + i + '=' + 2 * 1 )
// }


// Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito, 
// // e stampare tutta la tabellina del 2 fino al numero inserito.

const numeroMax = parseInt(prompt('Inserisci il numero max da stampare della tabellina del 2'));
const numeroInterazioni = numeroMax / 2;

for ( let i = 0 ; i< numeroInterazioni + 1; i ++){
    console.log('2*' + i + '=' + 2 * i );
}

