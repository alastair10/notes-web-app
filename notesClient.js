class NotesClient {

  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data);
      });
  }
  // TO DO
  // sends a POST request to the notes backend to create a new note
  createNote() {
    const noteData = { content: note };
    console.log(noteData);
  
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    })
  }

}

module.exports = NotesClient;