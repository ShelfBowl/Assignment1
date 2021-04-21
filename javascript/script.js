

var notesArray = [
    {
        title: "Example Notes",
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
    let titleInput = prompt("Please enter a title", "Note " + (notesArray.length+1));
    let bodyInput = document.getElementById("noteTextArea").value;
    document.getElementById("noteTextArea").value = "";
    notesArray.push({title: titleInput, body: bodyInput});
    document.getElementById("noteTitles").innerHTML += `<li id="${titleInput}" onclick="displayNote(event)">${titleInput}</li>`;
    
}



function displayNote(event) {
    let titleGet = event.target.id;
    
    console.log(event.target.id)

    for (let i in notesArray) {
        if (titleGet == notesArray[i].title) {
            console.log(titleGet)
            document.getElementById("noteTextArea").value = notesArray[i].body
        }
    }
}

