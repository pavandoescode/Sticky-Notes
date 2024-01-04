// content.js

// Create a div element for the sticky note
const stickyNote = document.createElement('div');
stickyNote.classList.add('sticky-note');
stickyNote.textContent = 'This is a sticky note!';

// Style the sticky note
stickyNote.style.position = 'absolute';
stickyNote.style.top = '500px';
stickyNote.style.left = '50px';
stickyNote.style.backgroundColor = 'yellow';
stickyNote.style.padding = '10px';
stickyNote.style.zIndex = '9999';
stickyNote.style.border = '1px solid black';

// Append the sticky note to the webpage
document.body.appendChild(stickyNote);
