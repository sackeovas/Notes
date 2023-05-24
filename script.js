const newNoteButton = document.getElementById("newNoteButton")
const notes = document.getElementById("notes")
newNoteButton.addEventListener("click",function(){
    notes.classList.add("note")
    console.log("Adding new note.")
})

