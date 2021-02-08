const url = 'http://localhost:3000/notes'
const notesForm = document.querySelector('#notes-field')
const notesList = document.querySelector('#notes-list')

notesForm.addEventListener('sumbit', function (event) {
    event.preventDefault()
    const noteInput = document.querySelector('#note-input').value
    const noteTitle = document.querySelector('#note-title').value
    createNote(notesInput, noteTitle)
})

notesList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        deleteNote(event.target)
    }
    if (event.target.classList.contains('edit')) {
        editNote(event.target)
    }
    if (event.target.classList.contains('cancel')) {
        hideEditControls(event.target.parentElement)
    }
    if (event.target.classList.contains('update-note')) {
        updateNote(event.target)
    }
}


function renderNoteItem(noteObj) {
    const noteEl = document.createElement('li')
    noteEl.id = noteObj.id
    renderNoteItem(noteEl, noteObj)
    notesList.appendChild(noteEl)
}

function renderNoteInput (noteEl, noteObj) {
    noteEl.innerHTML = `<p> ${noteObj.body}</p>`;
}

function editNote (element) {
    showEditInput(element.parentElement)
}

function showEditInput (noteItem) {
    noteItem.innderHTML = `
        <input type="text" value="${noteItem.textContent}" autofocus>
        <button data-note=${noteItem.id}>save</button>
        <button>cancel</button>
        `
    noteItem.querySelector('input').select()
}


function listNotes () {
    fetch(url)
        .then (Response => Response.json())
        .then(function (data => {
            console.log(data)
            for (let note of data) {
                console.log(note)
                renderNoteItem(note)
            }
        })

function createNote (noteTitle, noteInput) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: noteTitle,
            body: noteInput,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderNoteItem(data)
        })
}


function renderNoteItem (noteObj) {
    const noteEl = document.createElement('li')
    item.id = noteObj.id
    noteEl.classList.add()
    renderNoteItem(noteEl, noteObj)
    notesList.appendChild(noteEl)

}
    
function renderTodoText (todoListItem, noteObj) {
    todoListItem.innerHTML = `${noteObj.item}`
    }


















listNotes()