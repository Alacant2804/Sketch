const body = document.querySelector('body');
const container = document.querySelector('.container');
const gridSizeSlider = document.getElementById('grid-size-slider');
const currentGridSizeSpan = document.getElementById('current-grid-size');
const clear = document.getElementById('clearButton');

function createGrid(size = 16) {
    container.innerHTML = ''; // Clear the existing grid

    const gridSizePercentage = 480 / size;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-div');
            gridDiv.style.width = gridSizePercentage + 'px';
            gridDiv.style.height = gridSizePercentage + 'px';
            container.appendChild(gridDiv);
        }
    }

    addEventListenersToGrid();
}

function addEventListenersToGrid() {
    const gridDivs = document.querySelectorAll('.grid-div');

    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mouseenter', function() {
            gridDiv.style.background = 'black';
        });
    });
}

gridSizeSlider.addEventListener('input', function() {
    const newSize = gridSizeSlider.value;
    createGrid(newSize);
    currentGridSizeSpan.textContent = `Grid Size: ${newSize}x${newSize}`;
});

// Initial grid creation
createGrid(16);

clear.addEventListener('click', function() {
    const gridDivs = document.querySelectorAll('.grid-div');

    gridDivs.forEach(gridDiv => {
        gridDiv.style.background = 'white';
    });
})