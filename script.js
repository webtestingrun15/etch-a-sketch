const container = document.querySelector(".container");
const button = document.querySelector(".size");

function hoverGrid() {
  let grid = document.querySelectorAll('.grids');

  grid.forEach((div) => {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    let opacity = 0.1;

    div.addEventListener("mouseleave", () => {
      if (opacity <= 1){
        opacity += opacity;
      }
      div.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
      // div.style.opacity = opacity;
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
  resetGrid();
  gridSize = prompt("How big do you want the Grid?");
  if(gridSize <= 100 && gridSize !== null && gridSize !== ""){
    return grid(gridSize);
  } else {
    alert("Try again you must enter a number and it must be less than 100")
  }
}

function resetGrid() {
  const grids = document.querySelectorAll(".grids");
  if(grids.length){
    while(container.hasChildNodes){
      container.removeChild(container.firstChild);
    }
  }
}
