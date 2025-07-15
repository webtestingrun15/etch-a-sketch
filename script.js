const container = document.querySelector(".container");


function grid(l,w) {
  console.log(`${l} x ${w}`);
  const fullGrid = l * w;
  for (let i = 1; i <= fullGrid; i++) {
        const grids = document.createElement("div");
        grids.classList.add("grids");
        container.appendChild(grids);
  }
}
container.addEventListener('load', grid(16,16))
