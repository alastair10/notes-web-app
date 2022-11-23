/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('NotesView', () => {
  it('adds a new note', () => {
    
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');
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
});