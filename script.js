//your JS code here. If required.
const grid = document.querySelector(".grid-container");
const reset = document.getElementById("Reset");
const form = document.getElementById("form");
let previousSelectedElement = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let cellId = form.inputId.value;
  let cell = document.getElementById(cellId);
  if(previousSelectedElement){
    previousSelectedElement.style.backgroundColor="white";
	}
  previousSelectedElement = cell;
  let color = form.color.value;
  cell.style.backgroundColor = color;
  form.reset();
});

for(let i=1 ; i<=9 ; i++){
  const gridItem = document.createElement("div");
  gridItem.id = i;
  gridItem.innerText = i;
  gridItem.className = "grid-item";
  grid.appendChild(gridItem);
}
reset.addEventListener("click" , (e) => {
	for(let i=1 ; i<=9 ; i++){
		let cell = document.getElementById(i);
		previousSelectedElement = null;
  		cell.style.backgroundColor = "white";
	}
});