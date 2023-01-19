/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.

 function trovaIlMaggiore(a, b) {
            if (a > b) {
                console.log(a);
            } else {
                console.log(b);
            }
        }
        console.log(trovaIlMaggiore(20, 8));
        console.log(trovaIlMaggiore(5, 80));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* function notEqualFive (num) {
        if (num !== 5){
            console.log("Not-Equal");
        }
    }
    console.log(notEqualFive(3)); */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* function divisibilePerCinque (num) {
        if (num % 5 === 0){
            console.log("Divisible by 5");
        }
    }
    console.log(divisibilePerCinque(20)); */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*  function controllaSeOtto (num1, num2) {
if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 ===8 ) {
   return true;
} else {
    return false;
}
    }
    console.log(controllaSeOtto(8,25));
    console.log(controllaSeOtto(11,25)); */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* function calcolaTotaleAlCheckOut(totalShoppingCart) {
        let costoSpedizione;
        if (totalShoppingCart > 50) {
            costoSpedizione = 0;
            return totalShoppingCart + costoSpedizione;
        } else {
            costoSpedizione = 10
            return totalShoppingCart + costoSpedizione;
        }
    }

    console.log(calcolaTotaleAlCheckOut(25));
    console.log(calcolaTotaleAlCheckOut(100)); */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* function calcolaCarrelloTotale(totalShopping) {

            let spedizione;
            const sconto = totalShopping * 0.2;
            if (totalShopping > 50) {
                spedizione = 0;

                return totalShopping - sconto + spedizione;
            } else {
                spedizione = 10;
                const sconto = totalShopping * 0.2;
                return totalShopping - sconto + spedizione;
            }
        }

        console.log(calcolaCarrelloTotale(25));
        console.log(calcolaCarrelloTotale(100)); */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*  let numbers = [18, 3, 2016]

        let orderdNumbers = numbers.sort((a, b) => a - b);

        console.log(numbers); */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*function controllaSeIntero(num1) {
    return num1 % 1 === 0;}
   
 
    function controllaSeDecimale (num1){
    return num1 % 1 !==0;   
}

console.log(controllaSeIntero(40));
console.log(controllaSeIntero(30.5)); */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* function controllaSeDispari(num) {
    if (num % 2 === 0) { 
    return "pari";
  } else {
    return "dispari";
  }
}
console.log(controllaSeDispari(23));
console.log(controllaSeDispari(16)); */

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

/* let val = 7
    if (val < 10 && val > 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else  
  {
    console.log("Uguale a 10 o maggiore");
  } */

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* let size = 26;
    if (size < 5) {
        console.log("Tiny");
    } else if (size > 5 && size < 10) {
        console.log("Small");
    } else if (size > 10 && size < 15) {
        console.log("Medium");
    } else if (size > 15 && size < 20) {
        console.log("Large");
    } else 
     {
        console.log("Huge");
    } */

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* let isMale = true;
    let gender = isMale? "male":"female";
    console.log("Il genere è " +gender); */

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* var n = 0;
while (n < 6){
   console.log(n++);
   
} */

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/*  for(var n = 0; n < 11; n++){
    console.log(n);
} */

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* for(var n = 0; n < 11; n++){
        if (n === 3 || n === 8) {
            console.log("");
        }
    else {
        console.log(n);
}
} */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* for(var n = 0; n < 16; n++){
    console.log(n);
        if (n % 2 == 0) {
            console.log("Pari");
        } else 
        {
        console.log("Dispari");
}
} */

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
