// Get the 'Add Note' button and the notes list
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

// Retrieve notes from local storage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Function to save notes to local storage
function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to load notes from local storage and display on home page
function loadNotes() {
  notesList.innerHTML = ''; // Clear the list before adding notes
  notes.forEach(function (noteText, index) {
    const listItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        listItem.style.textDecoration = 'line-through';
      } else {
        listItem.style.textDecoration = 'none';
      }
    });

    const noteContent = document.createElement('span');
    noteContent.textContent = noteText;

    const moreOptionsBtn = document.createElement('button');
    moreOptionsBtn.textContent = 'More';
    moreOptionsBtn.addEventListener('click', function () {
      showOptions(index, moreOptionsBtn);
    });
    moreOptionsBtn.classList.add('more-btn');

    listItem.appendChild(checkbox);
    listItem.appendChild(noteContent);
    listItem.appendChild(moreOptionsBtn);

    notesList.appendChild(listItem);
  });
}
// Get the rest of the JavaScript code as provided previously.
// ...

// Function to handle showing additional options for a note
function showOptions(index, moreOptionsBtn) {
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function () {
    editNoteListItem(index);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    deleteNoteListItem(index);
  });

  const pinButton = document.createElement('button');
  pinButton.textContent = 'Pin';
  pinButton.addEventListener('click', function () {
    pinNoteListItem(index);
  });

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('note-actions');
  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);
  actionsDiv.appendChild(pinButton);

  const listItem = notesList.children[index];
  listItem.classList.toggle('show-actions');
  listItem.insertBefore(actionsDiv, moreOptionsBtn.nextSibling);
  listItem.removeChild(moreOptionsBtn);
}

// ...


// Function to handle adding a note
function addNote() {
  const newNote = prompt('Enter your note:');
  if (newNote !== null && newNote.trim() !== '') {
    notes.push(newNote);
    saveNotes(notes);
    loadNotes();
  }
}

// Function to handle deleting a note
function deleteNoteListItem(index) {
  notes.splice(index, 1);
  saveNotes(notes);
  loadNotes();
}

// Function to handle editing a note
function editNoteListItem(index) {
  const newText = prompt('Edit note:', notes[index]);
  if (newText !== null && newText.trim() !== '') {
    notes[index] = newText;
    saveNotes(notes);
    loadNotes();
  }
}

// Function to handle pinning a note to the top
function pinNoteListItem(index) {
  const pinnedNote = notes.splice(index, 1);
  notes.unshift(pinnedNote[0]);
  saveNotes(notes);
  loadNotes();
}

// Load stored notes on initial page load
loadNotes();

// Event listener for 'Add Note' button click
addNoteBtn.addEventListener('click', addNote);
