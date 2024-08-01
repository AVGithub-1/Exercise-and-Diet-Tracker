let rows = 0;
const table = document.getElementById("table");
const addButton = document.getElementById("Add button");
const deleteButton = document.getElementById("Delete button");
const day = document.querySelectorAll(".days li");

function makeTable(){
    console.log("ggg");
    rows++;
    //let table = document.getElementById("table");
    console.log(table);
    let newrow = table.insertRow(-1);
    let newcell = newrow.insertCell(0);
    let newText = document.createTextNode("New bottom row");
    newcell.appendChild(newText);
}

addButton.addEventListener("click", () => {
    rows++;
    console.log(table);
    let newrow = table.insertRow(1);

    for (let i = 0; i < 9; i++) {
        let newcell = newrow.insertCell(i);
        let input = document.createElement("input");
        input.type = "text"
        newcell.appendChild(input);
      } 
    
});

deleteButton.addEventListener("click", () => {
    rows--;
    console.log(table);
    let newrow = table.deleteRow(1);


});


let isMouseDown = false;

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

const changeColor = (event) => {
  if (isMouseDown) {
    let element = event.target;
    if(element.style.background == ""){
        element.style.background = "blue";
    }
    else if(element.style.background == "blue"){
        element.style.background = "";
    }
    //element.style.background = "red";
    //element.classList.add('red');
  }
};

const changeableElements = document.querySelectorAll('.days li');

changeableElements.forEach(element => {
  element.addEventListener('mouseover', changeColor);
});