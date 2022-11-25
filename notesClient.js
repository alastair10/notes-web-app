class NotesClient {

  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => errorCallback());
  }
  // TO DO
  // sends a POST request to the notes backend to create a new note
  createNote(note, errorCallback) {
    const noteData = { content: note};
  
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    })
      .catch((error) => {
        errorCallback();
      });
  }

}

module.exports = NotesClient;