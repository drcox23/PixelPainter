// console.log('aloha');

const numRows = 12;
const numColumns = 8; 

let colorDiv = document.createElement('div');
colorDiv.className = "mainColorDiv";
document.body.appendChild(colorDiv);


for (var i=0; i<numRows; i++){
    let createRow = document.createElement('div');
    createRow.className = 'paletteRows'
    createRow.id = 'rowID'+i;
    colorDiv.appendChild(createRow);
    for (var j=1; j <= numColumns; j++){
        let paletteDiv = document.createElement('div');
        paletteDiv.className = 'paletteColors';
        paletteDiv.id = 'pID' + i;
        createRow.appendChild(paletteDiv);
        console.log('yes');
    }
    
}


// function createPaletteDivs(numColumns){
//     for (var i=0; i<rows; i++){
    
//     }

// const paletteDiv = document.createElement('div');
// paletteDiv.className = 'paletteColors';



