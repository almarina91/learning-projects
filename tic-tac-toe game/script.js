var clicks = 0;
var gameFinished = false;
function countClicks() {
    clicks++;
}



function addSymbol(n) {
    var numClicks = clicks;
    var cell = document.getElementById(n);
    if (clicks <= 9 && gameFinished !== true) {
        if (numClicks%2 === 0) { 
        cell.innerHTML= "X";
        } else {
        cell.innerHTML= "O";
        }
        check();
    }
}

function check() {
    if (clicks >= 4 && clicks <= 9) {
        var table = document.getElementById("table1");
        for (var i = 0; i < table.rows.length; i++) {
            var cell1 = table.rows[i].cells[0].innerHTML;
            var cell2 = table.rows[i].cells[1].innerHTML;
            var cell3 = table.rows[i].cells[2].innerHTML;
                if ( table.rows[i].cells[0].innerHTML === table.rows[i].cells[1].innerHTML && 
                    table.rows[i].cells[0].innerHTML === table.rows[i].cells[2].innerHTML &&
                    (table.rows[i].cells[0].innerHTML == "X" || table.rows[i].cells[0].innerHTML == "O")) {
                    table.rows[i].style = "background-color: pink;";
                    gameFinished= true;
                    return;
                }
            }
        for (var i = 0; i < table.rows[0].cells.length; i++) {
            if ( table.rows[0].cells[i].innerHTML === table.rows[1].cells[i].innerHTML &&
                table.rows[0].cells[i].innerHTML === table.rows[2].cells[i].innerHTML &&
                (table.rows[0].cells[i].innerHTML === "X" || table.rows[0].cells[i].innerHTML === "O")) {
                    table.rows[0].cells[i].style = "background-color: pink;";
                    table.rows[1].cells[i].style = "background-color: pink;";
                    table.rows[2].cells[i].style = "background-color: pink;";
                    gameFinished = true;
                    return;
                }
        }
        if (table.rows[0].cells[0].innerHTML === table.rows[1].cells[1].innerHTML &&
            table.rows[0].cells[0].innerHTML === table.rows[2].cells[2].innerHTML &&
            (table.rows[0].cells[0].innerHTML === "X" || table.rows[0].cells[0].innerHTML === "O")) {
                table.rows[0].cells[0].style = "background-color: pink;";
                table.rows[1].cells[1].style = "background-color: pink;";
                table.rows[2].cells[2].style = "background-color: pink;";
                gameFinished = true;
                return;
            }

        if (table.rows[0].cells[2].innerHTML === table.rows[1].cells[1].innerHTML &&
            table.rows[0].cells[2].innerHTML === table.rows[2].cells[0].innerHTML &&
            (table.rows[0].cells[2].innerHTML === "X" || table.rows[0].cells[2].innerHTML === "O")) {
                table.rows[0].cells[2].style = "background-color: pink;";
                table.rows[1].cells[1].style = "background-color: pink;";
                table.rows[2].cells[0].style = "background-color: pink;";
                gameFinished = true;
                return;
            }

        }

}
