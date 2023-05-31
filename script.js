const newNoteButton = document.getElementById("newNoteButton")
const notesArea = document.getElementById("notesArea")
const textArea = document.getElementById("textArea")
newNoteButton.addEventListener("click",function(){
    const newNote = document.createElement("textArea")
    newNote.rows = 10;
    notesArea.append(newNote)
    console.log("Adding new note.")
    newNote.classList.add("noteClass")
})

