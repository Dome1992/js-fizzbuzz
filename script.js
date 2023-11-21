// Versione InnerHTML
/*const container = document.querySelector(".container")

for (let i = 0; i <= 100; i++) {
    
    // creiamo div completo
    const square = 
        `<div class="square">
            ${i}
        </div>
    `;

    container. innerHTML += square;

   


}*/

const container = document.querySelector(".container");

 //Inizia ciclo che si esegue da 1 a 100.
for (let i = 1; i <= 100; i++) {

    //Variabile chiamata label come stringa vuota. Questa variabile verrà utilizzata per accumulare il testo da inserire all'interno di ciascun quadrato.
    let label = '';
    let color = '';

    //Se il numero i è multiplo sia di 3 che di 5, aggiungi "FizzBuzz" alla variabile label.
    if (i % 3 === 0 && i % 5 === 0) {
        label = 'FizzBuzz';
        color = 'red';

    //Se il numero i è multiplo di 3, aggiungi "Fizz" alla variabile label.
    } else if (i % 3 === 0) {
        label = 'Fizz';
        color = 'green';

    //Se il numero i è multiplo di 5, aggiungi "Buzz" alla variabile label.
    } else if (i % 5 === 0) {
        label = 'Buzz';
        color = 'orange';

    //Se il numero non multiplo sia di 3 che di 5, rimane i elemento di default.
    } else {
        label = i;
    }


    //Questo sarà l'inizio della rappresentazione HTML del quadrato, square sceglierà 'label' o 'i', se label è una stringa vuota, utilizzerà il valore 'i' che abbiamo dato, in questo caso i numeri, altrimenti utilizzerà 'buzz,fizz,fizzbuzz'
    const square = `<div class="square"  style="background-color: ${color}">${label || i}</div>`;

    container.innerHTML += square;
}
