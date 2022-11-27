// global grid
const grid = []

// select the html grid element
const gridElement = document.querySelector("#grid");

const TILE_STATUSES = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    FLAGGED: "flag"
}


// displays the grid on the page
function displayGrid() {

    // loop over the rows
    grid.forEach(row => {
        // create an element to contain all cells in one row
        const div = document.createElement('div');
        // add a class for styling
        div.className = "row";

        // loop over all cells in the above row
        row.forEach(cell => {
            // add a class for styling
            cell.element.className = 'cell';
            // add the cell to the row element
            div.appendChild(cell.element);
        });

        // add the row element to the grid in the html
        gridElement.appendChild(div);
    })
}

export function makeGrid(gridSize, numberOfMines) {
    for (let x = 0; x < gridSize; x++) {
        const row = []
        for (let y = 0; y < gridSize; y++) {
            const element = document.createElement('div')
            element.dataset.status = TILE_STATUSES.HIDDEN
            const tile = {
                element,
                x,
                y
            }
            row.push(tile)
        }
        grid.push(row)
    }
}

function init() {
    // makes the grid - 10 wide and high, can be changed
    makeGrid(10, 5)

    // display the grid
    displayGrid()
}
init()