/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 
  In javascript esistono vari tipi di dato, che si differenziano in tipi di dato primitivi e tipi di dato complessi. Quelli primitivi si suddividono in:
  numerici, booleani, stringhe, null e undefined. I tipi di dato complessi sono tutti gli altri tipi di dato che non fanno parte della categoria dei primitivi (ad esempio array ,funzioni, oggetti ecc..).
  Per quanto riguarda i tipi di dato numerici sono quelli che vanno a rappresentari i classici numeri che conosciamo noi, ovvero numeri con segno positivo, negativo o numeri con la virgola.
  Il tipo stringa è un tipo di dato che rappresenta una sequenza di una o più lettere, andando a formare parole o frasi.
  Il tipo di dato boolean rappresenta il vero o falso.
  Il tipo di dato null è un tipo di dato che rappresenta un valore nullo di una variabile.
  Il tipo di dato undefined rappresenta un valore che non esiste.


*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Andrea";
console.log(myName);



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Ciraldo";
console.log(myName);
const PI = 3.14;
//PI = 3.2;
console.log(PI);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john";
var name2 = "John";
console.log(name1 != name2);

var name2lowercase = name2.toLowerCase();
console.log(name1 == name2lowercase);

