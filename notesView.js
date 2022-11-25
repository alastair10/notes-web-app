class NotesView {
  
  constructor(model, client) {
    // injecting the model class
    this.model = model; 
    
    // defining main container element
    this.mainContainerEl = document.querySelector('#main-container'); 
    
    // injecting client class
    this.client = client; 

    this.addNoteButtonEl = document.querySelector('#add-note-button')
    
    this.addNoteButtonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.client.createNote(newNote);
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
    document.querySelector('#add-note-input').value = '';
  };

  displayNotes() {
    // removes previous notes
    const oldNotes = document.querySelectorAll('.note');
    oldNotes.forEach(element => {
      element.remove();
    });
    
    // gets all notes (for the loop below)
    const notes = this.model.getNotes()
    
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
  };

  // calls loadNotes(+callback) on Client class
  // take response data and sets the list of notes on Model
  // then calls displayNotes()
  displayNotesFromApi() {
    this.client.loadNotes(
      (notes) => {
        this.model.setNotes(notes);
        this.displayNotes();
    });
  };
};

module.exports = NotesView;