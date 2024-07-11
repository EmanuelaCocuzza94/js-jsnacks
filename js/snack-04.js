console.log('Inizio Snack 4');

let invitati = [
    'Luca',
    'Carlo',
    'Giuseppe',
    'Carla',
];

let nome = prompt('Snack 4: inserisci il tuo nome');
console.log(nome);

let risultato = 'Non puoi entrare';
for (let i = 0; i < invitati.length; i++) {

    const nomeInvitato = invitati[i];

    if (nome === nomeInvitato){
        risultato = 'Puoi Entrare';
    }
     
}

console.log(risultato)