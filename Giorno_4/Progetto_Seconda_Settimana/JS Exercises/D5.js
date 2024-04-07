/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets);


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);



/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
for(let i=pets.length-1;i>=0;i--){
  console.log(pets[i]);
}


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let x = pets.shift();
pets.push(x);
console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for(let i=0;i<cars.length;i++){
  cars[i].licensePlate = "ABC" + i;
}
console.log(cars);



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


const auto = {
brand: 'Porsche',
model: '911',
color: 'black',
trims: ['titanium', 'st', 'active'],}
cars.push(auto);


for(let i=0;i<cars.length;i++){
  cars[i].trims.pop();
}

console.log(cars);




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(let i=0;i<cars.length;i++){
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i=0;i<cars.length;i++){
  if(cars[i].color.charAt(0).toLowerCase() === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let positionsArray=[];
for (let i=0;i<charactersArray.length;i++){
    switch (charactersArray[i]) {
      case 'a':
        positionsArray[i]=1;
        break;
      case 'b':
        positionsArray[i]=2;
        break;
      case 'c':
        positionsArray[i]=3;
        break;
      case 'd':
        positionsArray[i]=4;
        break;
      case 'e':
        positionsArray[i]=5;
        break;
      case 'f':
        positionsArray[i]=6;
        break;
      case 'g':
        positionsArray[i]=7;
        break;
      case 'h':
        positionsArray[i]=8;
        break;
      case 'i':
        positionsArray[i]=9;
        break;
      case 'j':
        positionsArray[i]=10;
        break;
      case 'k':
        positionsArray[i]=11;
        break;
      case 'l':
        positionsArray[i]=12;
        break;
      case 'm':
        positionsArray[i]=13;
        break;
      case 'n':
        positionsArray[i]=14;
        break;
      case 'o':
        positionsArray[i]=15;
        break;
      case 'p':
        positionsArray[i]=16;
        break;
      case 'q':
        positionsArray[i]=17;
        break;
      case 'r':
        positionsArray[i]=18;
        break;
      case 's':
        positionsArray[i]=19;
        break;
      case 't':
        positionsArray[i]=20;
        break;
      case 'u':
        positionsArray[i]=21;
        break;
      case 'v':
        positionsArray[i]=22;
        break;
      case 'w':
        positionsArray[i]=23;
        break;
      case 'x':
        positionsArray[i]=24;
        break;
      case 'y':
        positionsArray[i]=25;
        break;
      case 'z':
        positionsArray[i]=26;
        break;
      
    }
}
  

console.log(positionsArray); 