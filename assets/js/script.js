const grid = []

function addEventListeners(){

}

function checkForMines(){

}
export function makeGrid(gridSize, numberOfMines){
    const grid =[]
    for (let x = 0; x < gridSize; x++){
        const row = []
    for(let y = 0; y < gridSize; y++){
        const tile = {
            x,
            y
        }
        row.push(tile)
    }
    grid.push(row)
    }
    return grid
}

function init(){

}
init()