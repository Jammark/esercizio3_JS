/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var maggiore = function(num1, num2){
    if(Number.isInteger(num1) &&  Number.isInteger(num2)){
        if(num1 >= num2){
          return num1;
        }else{
          return num2;
        }
    }else{
      console.log('algoritmo maggiore valori errati.')
      return null;
    }
}

console.log('maggiore tra 5 e 6: ' + maggiore(5,6));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var diverso = function(num){
if(num != 5){
  console.log('not equal');
}
}

diverso(4);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var divisibile = function(num){
  if(num % 5 == 0){
      console.log('divisibile per 5');
  }
}

divisibile(20);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var otto = function(num1, num2){
  if(Number.isInteger(num1) &&  Number.isInteger(num2)){
    let result = num1 == 8 || num2 ==8 ? true : num1 + num2 == 8;
    return result;
  }
}

console.log(otto(4,4));

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var commerce = function(num){
  if(num >= 50){
    return num;
  }else{
    return num + 10;
  }
}

console.log(commerce(50));

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var BF = function(num){
  if(num >= 50){
    return num * 4/5;
  }else{
    return num * 4/5 + 10;
  }
}

console.log(BF(50));

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var num1, num2, num3;
num1= 4;
num2 = 2;
num3 = 7;

var ordina = function(num1, num2, num3){
  let lista = [];
  if(num1 >= num2 && num1 >= num3){
    lista.push( num1)
    if(num2>=num3 ){
      lista.push( num2);
      lista.push( num3);
    }else{
      lista.push( num3);
      lista.push( num2);
    }
  }else if(num2 >= num1 && num2 >= num3){
    lista.push( num2)
    if(num1>=num3 ){
      lista.push( num1);
      lista.push(num3);
    }else{
      lista.push( num3);
      lista.push( num1);
    }
  }else if(num3 >= num1 && num3 >= num2){
    lista.push(num3)
    if(num1>=num2 ){
      lista.push(num1);
      lista.push(num2);
    }else{
      lista.push( num2);
      lista.push( num1);
    }
  }

  console.log(lista);
}
 ordina(2,5,8);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var intero = function(num){
  return Number.isInteger(num) ;
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var pari = function(num){
  return num % 2 == 0;
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/



/* SCRIVI QUI LA TUA RISPOSTA */


let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

function Me(name, lastName, skills){
  this.name = name,
  this.lastName = lastName,
  this.skills = skills
}

Me.prototype.city = 'Toronto';

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me2 = {
  name: 'John',
 skills: ['javascript', 'html', 'css'],
}

me.lastName = null;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me3 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html'],
}

me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var array = [];
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

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array.splice(9, 1, 100);

console.log(array);