/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */

let pesoTotale = 0;
let zucchine = [
    {
        varieta: "bianca",
        peso: 10,
        lunghezza: 13
    },
    {
        varieta: "tonda",
        peso: 5,
        lunghezza: 8
    },
    {
        varieta: "tonda",
        peso: 10,
        lunghezza: 11
    },
    {
        varieta: "tonda",
        peso: 7,
        lunghezza: 10
    },
    {
        varieta: "bianca",
        peso: 12,
        lunghezza: 14
    },
    {
        varieta: "gialla",
        peso: 7,
        lunghezza: 11
    },
    {
        varieta: "gialla",
        peso: 6,
        lunghezza: 8
    },
    {
        varieta: "tonda",
        peso: 7,
        lunghezza: 9
    },
    {
        varieta: "bianca",
        peso: 10,
        lunghezza: 12
    },
    {
        varieta: "gialla",
        peso: 10,
        lunghezza: 14
    }
];

// Ciclo le zucchine per trovare il peso totale
for (let i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso;
}

console.log(pesoTotale);