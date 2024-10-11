
const container = document.querySelector(".container");

const sizeBtn = document.querySelector("button");

function createGrid (tilesPerRow){


const tileWidth = 700 / tilesPerRow;
const tileHeight = 700 / tilesPerRow;

container.innerHTML = '';


const totalTiles = tilesPerRow * tilesPerRow;
for(let i=0; i < totalTiles; i++) {
const tile = document.createElement("div"); 
container.append(tile);
tile.setAttribute('class', 'tile');
tile.style.width = `${tileWidth}px`;
tile.style.height = `${tileHeight}px`;
}

}

sizeBtn.addEventListener('click', (e) => {let grid = prompt("What would you like the dimensions to be?"); createGrid(grid);});
    
    

