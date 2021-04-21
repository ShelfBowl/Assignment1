

var notesArray = [
    {
        title: "Example Note",
        body: "This is an example"
    }
];

var isLight = true

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
 
function lightTheme(event) {

}

function newNote(event) {

}

function saveNote(event) {

}

function titleAlert(event) {

}

function displayNote(event) {

}

