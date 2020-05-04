var rIndex;

function add() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var table = document.getElementById('theTable');
    var age = document.getElementById("age").value;
    var addRow = table.insertRow(table.length);
    var firstCell = addRow.insertCell(0);
    var secondCell = addRow.insertCell(1);
    var thirdCell = addRow.insertCell(2);
    
    firstCell.innerHTML = firstName;
    secondCell.innerHTML = lastName;
    thirdCell.innerHTML = age;

    rowToInput();
}

function rowToInput() {
    var table = document.getElementById('theTable');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            document.getElementById("firstName").value = this.cells[0].innerHTML;
            document.getElementById("lastName").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
        }   
    }
    var cells = table.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            cell.onclick = function () {
                var rowId = this.parentNode.rowIndex;
                var rowsNotSelected = table.getElementsByTagName('tr');
                for (var row = 0; row < rowsNotSelected.length; row++) {
                    rowsNotSelected[row].style.backgroundColor = "";
                    rowsNotSelected[row].classList.remove('selected');
                }
                var rowSelected = table.getElementsByTagName('tr')[rowId];
                rowSelected.style.backgroundColor = "olive";
                rowSelected.className += " selected";
            }
        }
}

function edit() {
    var table = document.getElementById('theTable');
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = lname;
    table.rows[rIndex].cells[2].innerHTML = age;
}

function remove() {
    var table = document.getElementById('theTable');
    table.deleteRow(rIndex);
}




