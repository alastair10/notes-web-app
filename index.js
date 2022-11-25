const NotesClient = require('./notesClient');
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);

// model.addNote('this is an example note');
view.displayNotesFromApi();

client.loadNotes((notes) => {
  // This will be executed if notes are loaded correctly from the server
  model.setNotes(notes);
  view.displayNotes();
}, () => {
  // This will be executed if there's an error
  view.displayError();
});