/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 5;
let y = 8;
if(x>y){
  console.log(x + " è il numero più grande");
} else{
  console.log(y + " è il numero più grande ");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x2 = 2;

if (x2 != 5) {
  console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x3 = 10;
if(x3%5==0){
  console.log(x3 + " è divisibile per 5");
} else {
  console.log(x3 + " non è divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x4 = 12;
let y4 = 4;

if(x4==8 || y4==8 || (x4-y4)==8 || (x4+y4)==8){
  console.log("Verificato");
} else{
  console.log("Non verificato");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 50;
let shipping = 10;
let amount = totalShoppingCart;

if (totalShoppingCart < 50) {
  amount += shipping;
}
console.log("Totale da pagare:" + amount);




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 60;
let shipping2 = 10;
let sconto = (totalShoppingCart2*20)/100;
let amount2 = totalShoppingCart2 - sconto;

if (amount2 < 50) {
  amount2 += shipping2;
}
console.log("Totale da pagare:" + amount2);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let val1 = 11;
let val2 = 4;
let val3 = 6;

if (val3>val2 && val2>val1){
  console.log(val3, val2, val1)
} else if (val3>val1 && val1> val2) {
  console.log (val3, val1, val2)
} else if(val2>val3 && val3>val1){
  console.log(val2, val3, val1)
} else if (val2>val1 && val1>val3){
  console.log(val2, val1, val3)
} else if (val1>val3 && val3>val2){
  console.log(val1, val3, val2)
} else if (val1>val2 && val2>val3){
  console.log(val1, val2, val3)
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let num = 5;

if (typeof num === "number") {
  console.log(num + " è un numero");
} else {
  console.log(num +" non è un numero");
}




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x9 = 4;
if(x9%2==0){
  console.log(x9 + " è pari");
} else {
  console.log(x9 + " è dispari")
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

  let val = 7
  if (val >= 5 && val < 10) {
      console.log( val + " è meno di 10");
    } else if (val < 5) {
      console.log(val + " è meno di 5");
    } else {
      console.log(val + " è uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
console.log(me);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array.pop();
array.push(100);
console.log(array);