// Versione InnerHTML
const container = document.querySelector(".container")

for (let i = 0; i <= 100; i++) {
    
    // creiamo div completo
    const square = 
        `<div class="square">
            ${i}
        </div>
    `;

    container. innerHTML += square;

    if (i % 3 === 0) {
        square += 'Fizz'
    } 
     if (i % 5 === 0) {
        square += 'Buzz';
    }
    if (i % 3 === 0 && i % 5 === 0) {
        square += 'FizzBuzz';
    }


}