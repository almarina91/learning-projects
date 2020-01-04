var request = new XMLHttpRequest();

function fillTable(standings) {
    var table = standings[0].table;
    for (i=0; i<table.length; i++) {
        var positionCell = '<td>' + table[i].position + '</td>';
        var logoCell = '<td><img src="' + table[i].team.crestUrl + '" width= 15px height= 15px></td>';
        var nameCell = '<td>' + table[i].team.name + '</td>';
        var pointsCell = '<td>' + table[i].points + '</td>';
        var row = '<tr>' + positionCell + logoCell + nameCell + pointsCell + '</tr>';
        document.getElementById ('standings').innerHTML += row;
        console.log(table[i].team);
    }
}


request.open('GET','https://api.football-data.org/v2/competitions/2021/standings?standingType=HOME');
request.setRequestHeader("X-Auth-Token", "251a3ed91c48428cb387a358f999c866");
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        var items = JSON.parse(request.responseText);
        var standings = items["standings"];
                fillTable(standings);
        /*for ( var key in items) {
            if (key === "standings") {
                var standings = items[key];
                fillTable(standings);
            }
        }*/
    }
}
request.send();

