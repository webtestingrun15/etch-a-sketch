const container = document.querySelector(".container");

function hoverGrid() {
  let grid = document.querySelectorAll('.grids');

  grid.forEach((div) => {
    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "blue";
    });
  });
}

function grid(l,w) {
  console.log(`${l} x ${w}`);
  const fullGrid = l * w;
  for (let i = 1; i <= fullGrid; i++) {
        const grids = document.createElement("div");
        grids.classList.add("grids");
        container.appendChild(grids);
  }
  hoverGrid();
}

container.addEventListener('load', grid(16,16))


