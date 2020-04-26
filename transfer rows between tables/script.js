
function moveRight() {
    var table1 = document.getElementById("firstTable");
    var table2 = document.getElementById("secondTable");
    var checkBoxesTable1 = table1.getElementsByTagName("input");
    for (i=0; i<checkBoxesTable1.length; i++) {
        if (checkBoxesTable1[i].checked === true) {
            var selectedRow = checkBoxesTable1[i].parentNode.parentNode.innerHTML;
            table2.innerHTML += selectedRow;
        }
    }
    var checkBoxesTable2 = table2.getElementsByTagName("input");
    for (i=0; i<checkBoxesTable2.length; i++) {
        var tdItems2 = checkBoxesTable2[i].parentNode.parentNode.getElementsByTagName('td');
        var name2 = tdItems2[0].innerHTML;
        var lastName2 = tdItems2[1].innerHTML;

        for (j=0; j<checkBoxesTable1.length; j++) {
            var tdItems1 = checkBoxesTable1[j].parentNode.parentNode.getElementsByTagName('td');
            var name1 = tdItems1[0].innerHTML;
            var lastName1 = tdItems1[1].innerHTML;

            if (name1 === name2 && lastName1 === lastName2 ) {
                checkBoxesTable1[j].parentNode.parentNode.parentNode.removeChild(checkBoxesTable1[j].parentNode.parentNode);
                break;
            }
        }
    }
}

function moveLeft() {
    var table1 = document.getElementById("firstTable");
    var table2 = document.getElementById("secondTable");
    var checkBoxesTable2 = table2.getElementsByTagName("input");
    for (i=0; i<checkBoxesTable2.length; i++) {
        if (checkBoxesTable2[i].checked === true) {
            var selectedRow = checkBoxesTable2[i].parentNode.parentNode.innerHTML;
            table1.innerHTML += selectedRow;
        }
    }
    var checkBoxesTable1 = table1.getElementsByTagName("input");
    for (i=0; i<checkBoxesTable1.length; i++) {
        var tdItems1 = checkBoxesTable1[i].parentNode.parentNode.getElementsByTagName('td');
        var name1 = tdItems1[0].innerHTML;
        var lastName1 = tdItems1[1].innerHTML;

        for (j=0; j<checkBoxesTable2.length; j++) {
            var tdItems2 = checkBoxesTable2[j].parentNode.parentNode.getElementsByTagName('td');
            var name2 = tdItems2[0].innerHTML;
            var lastName2 = tdItems2[1].innerHTML;

            if (name1 === name2 && lastName1 === lastName2 ) {
                checkBoxesTable2[j].parentNode.parentNode.parentNode.removeChild(checkBoxesTable2[j].parentNode.parentNode);
                break;
            }
        }
    }
}

