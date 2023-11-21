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
    
}