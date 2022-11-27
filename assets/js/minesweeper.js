import { makeGrid } from "./script.js";

const row = 15
const tile = 15
const NUMBER_OF_MINES = 2


const grid = makeGrid()
Array.from(grid).forEach(row =>{
   Array.from(row).forEach(tile =>{
        gridElement.appendChild(tile.element)

    })
})