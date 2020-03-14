var animals = [];

function displayAnimals() {
    var newAnimalInput = document.getElementById("newAnimal").value;
    animals.push(newAnimalInput);
    var addText = " ";
    for (i=0; i< animals.length; i++) {
        addText = addText + animals[i] + "<br>";
    }
    document.getElementById("display").innerHTML = addText;
}
