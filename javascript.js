function createGrid(){
    const gridContainer = document.querySelector("#grid-container");
    const gridSizeInput = document.getElementById("sketchpad-size-input");
    let gridSize = gridSizeInput.value;

    // console.log(gridSize);
    // console.log(typeof(gridSi/ze));
    gridSize = Number(gridSize);
    gridSize = Math.abs(gridSize);
    // console.log(gridSize);
    // console.log(typeof(gridSize));
    let size = (gridSize > 100 ) ? 100 : gridSize;

    // console.log(typeof(size));

    // console.log(size);
    const rows = size;
    const cols = size;
    // block.style.borderStyle = "solid"
    // block.style.flex = "1 1 100px";
    // block.style.background = "#f0f0f0";
    // block.style.gap = "20px"

    // block.textContent
    gridContainer.replaceChildren();
    for(var i = 0; i < rows; i++){
        
        for(var j = 0; j < cols; j++){
            const block = document.createElement("div");
            block.classList.add('grid-cell'); 
            var width = (960/rows);
            width = String(width + "px");
            // console.log(width)
            // console.log(typeof(width))
            block.style.width = width;
            block.addEventListener('mouseover', function() {
                block.style.backgroundColor = "red";
            })
            // block.textContent= `${i},${j}`;
            // block.innerHTML("&nbsp");
            gridContainer.append(block);
        }
    }

}

