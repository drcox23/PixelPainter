// console.log('aloha');

const numRows = 12;
const numColumns = 8; 

let colorDiv = document.createElement('div');
colorDiv.className = "mainColorDiv";
document.body.appendChild(colorDiv);


for (let i=0; i<numRows; i++){
    let createRow = document.createElement('div');
    createRow.className = 'paletteRows'
    createRow.id = 'rowID'+i;
    colorDiv.appendChild(createRow);
    for (let j=1; j <= numColumns; j++){
        let paletteDiv = document.createElement('div');
        paletteDiv.className = 'paletteColors';
        paletteDiv.id = 'pID' + i;
        createRow.appendChild(paletteDiv);
    }
    
}

const allTheColors = ["#CD5C5C", "#F08080", "#FA8072", "#E9967A", "#FFA07A", "#DC143C", "#FF0000", "#B22222", "#8B0000", "#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#C71585", "#DB7093", "#FF7F50", "#FF6347", "#FF4500", "#FF8C00", "#FFA500", "#FFD700", "#FFFF00", "#FFFFE0", "#FFFACD", "#FAFAD2", "#FFEFD5", "#FFE4B5", "#FFDAB9", "#EEE8AA", "#F0E68C", "#BDB76B", "#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF00FF", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080", "#663399", "#4B0082", "#7B68EE", "#6A5ACD", "#483D8B", "#00FFFF", "#00FFFF", "#E0FFFF", "#AFEEEE", "#7FFFD4", "#40E0D0", "#48D1CC", "#00CED1", "#5F9EA0", "#4682B4", "#B0C4DE", "#B0E0E6", "#ADD8E6", "#87CEEB", "#87CEFA", "#00BFFF", "#1E90FF", "#6495ED", "#41690", "#0000FF", "#0000CD", "#00008B", "#80", "#191970", "#ADFF2F", "#7FFF00", "#7CFC00", "#00FF00", "#32CD32", "#98FB98", "#90EE90", "#00FA9A", "#00FF7F", "#3CB371", "#2E8B57", "#228B22", "#8000", "#6400", "#9ACD32", "#6B8E23", "#808000", "#556B2F", "#66CDAA", "#8FBC8F", "#20B2AA", 
"#008B8B", "#8080"];

console.log(allTheColors.length);

let colorPalette = document.getElementsByClassName('paletteColors');

for (let i=0; i<colorPalette.length; i++){
    colorPalette[i].style.backgroundColor = allTheColors[i];
};




