console.log('Inizio Snack 2');

let parola1 = prompt('Snack 2: inserisci prima parola');
console.log(parola1);

let parola2 = prompt('Snack 2: inserisci seconda parola');
console.log(parola2);

/**
 * if parola1 > parola2
 *      stampa parola 2 parola 1
 * else stampa parola 1 parola  2
 */

if (parola1 > parola2){
    console.log(parola2, parola1)
}else {
    console.log(parola1, parola2)
}
