const TILE_STATUSES = {
    HIDDEN:"hidden",
    MINE:"mine",
    NUMBER:"number",
    FLAGGED:"flag"
}
function addEventListeners(){

}

function checkForMines(){

}
export function makeGrid(gridSize, numberOfMines){
    const grid =[]
    for (let x = 0; x < gridSize; x++){
        const row = []
    for(let y = 0; y < gridSize; y++){
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
    return grid
}

function init(){

}
init()