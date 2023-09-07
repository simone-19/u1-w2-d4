/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function(l1, l2) {
    let result = l1*l2
    
    return result
}
console.log("area rettangolo", area(5,4))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri
  è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2){
    if ( n1 === n2){
        return ( n1 + n2) * 3
    } else {
        return n1 + n2
    }
}
console.log ('crazySum', crazySum (5, 5))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero
  fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (x){
    const differenza = (x + 19);
        if (x >= 19) {
            return differenza}
            else 
                return differenza * 3
            }

console.log(crazyDiff(0))
console.log(crazyDiff(20))





/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro,
  e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function(n) {
  if ((n >= 20 && n <= 100) || n === 400)
  return true
else {
    return false
}
  }
console.log(boundary( 'come è'))




/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (e) {
    if (e === 'ciao')
    return e
else {
    (e === 'epicode')
    return 'epicode'
}

}
console.log ( epify())




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
 
const check3and7 = function (j1){
    if ((j1 % 3 === 0)||(j1 % 7 ===0) )
    return true
else {
return false
}
}
console.log (check3and7(21))






/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


const reverseString = function (s){
let reverse = ''
for ( let i = s - 1; i >= 0;  i--) {
reverse += s.charAt(i)
}
return reverse
}
const string = 'epicode';
const inverterer = reverseString(string);
console.log ('prima' + string);
console.log('invertita' + inverterer)








/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = ('queste sono le parole che mi servono')
 





/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/






/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un 
 numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
