// console.log('aloha');

const numRows = 13;
const numColumns = 8; 

let colorDiv = document.createElement('div');
colorDiv.className = "mainColorDiv";
pixelPainter.appendChild(colorDiv);

// create grid for palette.
for (let i=0; i<numRows; i++){
    let createRow = document.createElement('div');
    createRow.className = 'paletteRows'
    createRow.id = 'r'+i;
    colorDiv.appendChild(createRow);
    for (let j=1; j <= numColumns; j++){
        let paletteDiv = document.createElement('div');
        paletteDiv.className = 'paletteColors';
        paletteDiv.id = createRow.id+'p' + j;
        createRow.appendChild(paletteDiv);
        // console.log(paletteDiv.id)
    }
    
}

// ***** array of colors *****
const allTheColors = ["#CD5C5C", "#F08080", "#FA8072", "#E9967A", "#FFA07A", "#DC143C", "#FF0000", "#B22222", "#8B0000", "#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#C71585", "#DB7093", "#FF7F50", "#FF6347", "#FF4500", "#FF8C00", "#FFA500", "#FFD700", "#FFFF00", "#FFFFE0", "#FFFACD", "#FAFAD2", "#FFEFD5", "#FFE4B5", "#FFDAB9", "#EEE8AA", "#F0E68C", "#BDB76B", "#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF00FF", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080", "#663399", "#4B0082", "#7B68EE", "#6A5ACD", "#483D8B", "#00FFFF", "#00FFFF", "#E0FFFF", "#AFEEEE", "#7FFFD4", "#40E0D0", "#48D1CC", "#00CED1", "#5F9EA0", "#4682B4", "#B0C4DE", "#B0E0E6", "#ADD8E6", "#87CEEB", "#87CEFA", "#00BFFF", "#1E90FF", "#6495ED", "#41690", "#0000FF", "#0000CD", "#00008B", "#80", "#191970", "#ADFF2F", "#7FFF00", "#7CFC00", "#00FF00", "#32CD32", "#98FB98", "#90EE90", "#00FA9A", "#00FF7F", "#3CB371", "#2E8B57", "#228B22", "#8000", "#6400", "#9ACD32", "#6B8E23", "#808000", "#556B2F", "#66CDAA", "#8FBC8F", "#20B2AA", 
"#008B8B", "#8080", "#140d1d", "#3e3c40", "#4e4b51", "#6b676e", "#928d97", "#c2a058", "#ffffff", "#000000"];

// console.log(allTheColors.length);

// ***** set palette colors *****
const colorPalette = document.getElementsByClassName('paletteColors');
// console.log(colorPalette.length)
for (let i=0; i<colorPalette.length; i++){
    colorPalette[i].style.backgroundColor = allTheColors[i];
    colorPalette[i].addEventListener('click', showHighlight);
};

// show the paint color chosen
let canvasText = document.createElement('div');
canvasText.id = "textCanvas";
colorDiv.appendChild(canvasText);
canvasText.innerHTML = "The Paint Color"

var colorChoice = document.createElement('div');
colorChoice.className = "daColor";
colorChoice.style.backgroundColor = "white";
document.body.appendChild(colorChoice);

function showHighlight(){
    console.log(this.id);
    this.style.border = "1px solid yellow";
    colorChoice.style.backgroundColor = this.style.backgroundColor;
   
}

// creating the grid to paint on
const canvasNumRows = 10;
const canvasNumColumns = 10; 

let canvasDiv = document.createElement('div');
canvasDiv.className = "mainCanvasDiv";
document.body.appendChild(canvasDiv);


// ***** create grid for canvas.*****
for (let i=0; i<numRows; i++){
    let createCanvasRow = document.createElement('div');
    createCanvasRow.className = 'canvasRows'
    createCanvasRow.id = 'cRow'+i;
    canvasDiv.appendChild(createCanvasRow);
    for (let j=1; j <= canvasNumColumns; j++){
        let blankCanvasDiv = document.createElement('div');
        blankCanvasDiv.className = 'canvasColumns';
        // blankCanvasDiv.id = 'daCanvasDivs';
        blankCanvasDiv.id = createCanvasRow.id+'p' + j;
        blankCanvasDiv.style.backgroundColor = "white"
        createCanvasRow.appendChild(blankCanvasDiv);
        // console.log(blankCanvasDiv.id)
    }
}

// ***** be able to paint the canvas *****
const colorMe = document.getElementsByClassName('canvasColumns');

for (let i=0; i < colorMe.length; i++){
    colorMe[i].addEventListener('click', colorTheCanvas);
    // colorMe[i].addEventListener('mousedown', colorTheCanvas);
}

function colorTheCanvas(){
    console.log(this.id);
    this.style.backgroundColor = colorChoice.style.backgroundColor;
}

// ***** erase button *****
let eraseButton = document.createElement('div');
eraseButton.className = 'clearCanvas';
eraseButton.innerHTML = "CLEAR";
document.body.appendChild(eraseButton);
eraseButton.addEventListener('click', eraseCanvas);

function eraseCanvas(){
    colorChoice.style.backgroundColor = "white"

    for (let i=0; i < colorMe.length; i++){
        colorMe[i].style.backgroundColor = "white";
    }
};


