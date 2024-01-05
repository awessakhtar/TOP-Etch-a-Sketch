document.addEventListener('DOMContentLoaded', function () {
    // get the grid continer from webpage
    let gridContainer = document.querySelector('.grid');

    // create a 16X16 grid of divs

    for (let i = 1; i < 16 * 16; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }


})