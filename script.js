const newNoteButton = document.getElementById("newNoteButton")
const note = document.getElementById("note")
const textArea = document.getElementById("textArea")

newNoteButton.addEventListener("click",function(){
    const newNote = document.createElement("textArea")
    newNote.rows = 10;
    note.append(newNote)
    console.log("Adding new note.")
    newNote.classList.add("noteTextArea")
})


