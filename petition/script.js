var members = [];

function addMember () {
    var newMember = document.getElementById("newMember").value;
    members.push(newMember);
    var listOfMembers = "";
    for (i=0; i < members.length; i++) {
        listOfMembers = listOfMembers + "<li>" + members[i] + "</li>";
    }
    document.getElementById("membersList").innerHTML = listOfMembers;
}