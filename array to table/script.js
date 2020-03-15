var elements = [];

function addElement() {
    var newElement = document.getElementById("newElement").value;
    elements.push(newElement);
    var newItem = "";
    for (i=0; i<elements.length; i++) {
        if (i === 0 || i % 3 === 0) {
            newItem = newItem + "<tr>" + "<td>" + elements[i] + "</td>";
        } else  if ((i + 1) % 3 === 0) {
            newItem = newItem + "<td>" + elements[i] + "</td>" + "</tr>";
        } else {
            newItem = newItem + "<td>" + elements[i] + "</td>";
        }
    }
    document.getElementById("elementsTable").innerHTML = newItem;
}