const NotesModel = require('./notesModel');

describe ('getNotes', () => {
  it ('returns an empty list of notes', () => {
    const notes = new NotesModel();
    expect(notes.getNotes()).toEqual([]);
  });
});

describe ('addNote', () => {
  it ('it adds a note to the list', () => {
    const notes = new NotesModel();
    notes.addNote('test note');
    expect(notes.getNotes()).toEqual(['test note']);
  });
});

describe ('reset', () => {
  it ('resets the note list to empty', () => {
    const notes = new NotesModel();
    notes.addNote('note1');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  })
})