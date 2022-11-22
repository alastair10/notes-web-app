class NotesView {
  
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    // get all the notes
    const notes = this.model.getNotes()
    
    // For each note:
    //  - create a new element
    //  - assign the note to the created element
    //  - append the new element on the main container
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }
}

module.exports = NotesView;