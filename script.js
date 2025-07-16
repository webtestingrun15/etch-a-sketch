const container = document.querySelector(".container");
const button = document.querySelector(".size");

function hoverGrid() {
  let grid = document.querySelectorAll('.grids');

  grid.forEach((div) => {
    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "blue";
    });
  });
}

function grid(size) {
  console.log(`${size} x ${size}`);
  const fullGrid = size * size;
  for (let i = 1; i <= fullGrid; i++) {
        const grids = document.createElement("div");
        grids.classList.add("grids");
        container.appendChild(grids);
  }
  hoverGrid();
}

button.addEventListener('click', buttonClick);

function buttonClick() {
  let gridSize = prompt("How big do you want the Grid?");
  if(gridSize <= 101 || gridSize !== null || gridSize !== ""){
    return grid(gridSize);
  } else {
    alert("Try again your number must be less than 100")
  }
}
