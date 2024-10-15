
const container = document.querySelector(".container");

const sizeBtn = document.querySelector("#resize");
const eraseBtn = document.querySelector("#erase");
const rainbowBtn = document.querySelector("#rainbow");
const standardBtn = document.querySelector("#standard");

let currentMode = "gray";

function createGrid (tilesPerRow){


const tileWidth = 700 / tilesPerRow;
const tileHeight = 700 / tilesPerRow;

container.innerHTML = '';

function randomColors() {
    let hex = '#' + Math.floor(Math.random() * 16777215).toString(16); 
    return hex;
}

const totalTiles = tilesPerRow * tilesPerRow;
for(let i=0; i < totalTiles; i++) {
const tile = document.createElement("div"); 
container.append(tile);
tile.setAttribute('class', 'tile');
tile.style.width = `${tileWidth}px`;
tile.style.height = `${tileHeight}px`;
tile.addEventListener('mouseenter', () => {
    if (currentMode === 'rainbow') {
        tile.style.backgroundColor = randomColors();
    } else if (currentMode === "standard") {
        tile.style.backgroundColor = "grey";
    } else {
        tile.style.backgroundColor = currentMode;
    }
        });
    }
 
}

rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbow';
});

eraseBtn.addEventListener('click', () => {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {tile.style.backgroundColor = 'white';  tile.style.outline = '1px solid black';});
  
});

standardBtn.addEventListener('click', () => {
    currentMode = "standard"
});



createGrid(16);

sizeBtn.addEventListener('click', (e) => {let grid = prompt("What would you like the dimensions to be?"); createGrid(grid);});
    

