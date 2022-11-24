/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

describe('NotesView', () => {
  
  // beforeEach hook sets the jest 'document' HTMLL before each test
  // uses the html as a mock webpage for the tests
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('adds a new note', () => {  
    //Arrange
    const model = new NotesModel();
    const view = new NotesView(model);

    //Act
      // Fill the input
    const input = document.querySelector('#add-note-input');
    input.value = 'My new note'
      // Click the button
    const button = document.querySelector('#add-note-button');
    button.click(); // simulate a click on the button

    //Assert
    expect(document.querySelectorAll('div.note').length).toEqual(1); // checks if there is an element w/HTML ID 'div.note' on the doc.
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new note'); // checks if the first content of the html is the note user has entered
  });

  it('verifies displayNotes called x2 still retains the right number of notes on the page', () => {
    //Arrange
    const model = new NotesModel();
    const view = new NotesView(model);

    //Act
    model.addNote('Test1');
    model.addNote('Test2');

    view.displayNotes();
    view.displayNotes();

    //Assert
    expect(document.querySelectorAll('div.note').length).toEqual(2)
  });

  it('calls loadNotes on client class, gets response, and sets list of notes on model', () => {
    const model = new NotesModel(); 
    const view = new NotesView(model);
    const client = new NotesClient();

    view.displayNotesFromApi();

    // call loadNotes(callback) on Client class
    // take response data and set the list of notes on Model and call displayNotes();
  });
});