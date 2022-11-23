class NotesView {
  
  constructor(model) {
    this.model = model; // injecting the model class
    this.mainContainerEl = document.querySelector('#main-container'); // defining main container element

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }


  displayNotes() {
    const notes = this.model.getNotes() // gets all notes (for the loop below)
    
    // For each note:
    //  - create a new element
    //  - assign the note to the created element
    //  - append the new element on the main container
    notes.forEach(note => {
      const noteElement = document.createElement('div');
      noteElement.textContent = note;
      noteElement.className = 'note';
      this.mainContainerEl.append(noteElement);
    });
  }
}

module.exports = NotesView;