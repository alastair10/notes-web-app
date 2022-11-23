const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const model = new NotesModel();
// model.addNote('this is an example note');

const view = new NotesView(model);
view.displayNotes();