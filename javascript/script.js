

var notesArray = [
    {
        title: "Example Note",
        body: "This is an example"
    }
];

var isLight = true;

function themeSwitcher(event) {
    if (isLight == true) {
        document.body.setAttribute('data-theme', 'dark');
        isLight = false;
        document.getElementById("theme").innerHTML = "Light Theme";
    } else {
        document.body.setAttribute('data-theme', 'light');
        isLight = true;
        document.getElementById("theme").innerHTML = "Dark Theme";
    }

}

function cancelNote(event) {
    document.getElementById("noteTextArea").style.visibility = "hidden";
    document.getElementById("save").style.visibility = "hidden";
    document.getElementById("cancel").style.visibility = "hidden";
}

function newNote(event) {
    document.getElementById("noteTextArea").style.visibility = "visible";
    document.getElementById("noteTextArea").value = "";
    document.getElementById("save").style.visibility = "visible";
    document.getElementById("cancel").style.visibility = "visible";
}

function saveNote(event) {
    titleInput = prompt("Please enter a title", "Note " + (notesArray.length+1));
    bodyInput = document.getElementById("noteTextArea").value;
    notesArray.push({title: titleInput, body: bodyInput});
    document.getElementById("noteTitles").innerHTML += `<li>${titleInput}</li>`;
}



function displayNote(event) {

}

