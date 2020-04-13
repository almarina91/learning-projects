var index;

function getIndexForRowId(rowId) {
    var table = document.getElementById("mainTable");
    var rows = table.getElementsByTagName("tr");

    for(i = 1; i < rows.length; i++) {
        if (rows[i].id === rowId) {
            return i;
        }
    }

    return 1;
}

function onRowClick(rowId) {
    var table = document.getElementById("mainTable");
    var rows = table.getElementsByTagName("tr");
    index = getIndexForRowId(rowId);

    for(i = 1; i < rows.length; i++) {
        if (i === index) {
            rows[i].style.backgroundColor=("green");
        } else {
            rows[i].style.backgroundColor=("white");
        }
    }
}
    
function upAndDown(direction) {
    var table = document.getElementById("mainTable");
    var rows = table.getElementsByTagName("tr");
    var currentRow = rows[index];
    
    if(direction === 'up') {
        if (index > 1){
            var swapRow = rows[index-1];
            swapRow.parentNode.insertBefore(currentRow, swapRow);
            index = index-1;
        }
    }
    if(direction === 'down') {
    var swapRow = rows[index+1];
    currentRow.parentNode.insertBefore(swapRow, currentRow);
    index = index+1;
    }
}
