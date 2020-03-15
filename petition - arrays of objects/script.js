var members = [];

function addMember() {
    
    var newMemberName = document.getElementById("name").value;
    var newMemberSurname = document.getElementById("surname").value;
    var newMemberAge = document.getElementById("age").value;
    var newMemberObject = {name: newMemberName, surname: newMemberSurname, age: newMemberAge};
    members.push(newMemberObject);

    var addMemberTable = "";
    var length = members.length;
    for (i=0; i<length; i++) {
        addMemberTable = addMemberTable + "<tr>" + "<td>" + members[i].name + "</td>" + "<td>" + members[i].surname + "</td>" + "<td>" + members[i].age + "</td>" + "</tr>";
    }
    document.getElementById("membersTable").innerHTML = addMemberTable;
}