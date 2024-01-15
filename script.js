

document.getElementById('add-note-btn').addEventListener('click', function() {
    const input = document.getElementById('note-input');
    if (input.value.trim() !== '') {
        addNote(input.value);
        input.value = '';
    }
});

function addNote(text) {
    const notesContainer = document.getElementById('notes-container');
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <span>${text}</span>
        <button onclick="deleteNote(this)">Delete</button>
    `;
    notesContainer.appendChild(note);
}

/*function deleteNote(button) {
    const note = button.parentElement;
    note.remove();
}*/

function deleteNote(button) {
    const note = button.parentElement;
    note.classList.add('fadeOut');

    // Wait for the animation to finish before removing the element
    note.addEventListener('animationend', () => {
        note.remove();
    });
}