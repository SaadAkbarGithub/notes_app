let addBtn = document.getElementById('addBtn');
let notesObj = [];
displayNotes();
// Adding function of note start
addBtn.addEventListener('click', function (e) {
    let inputField = document.getElementById('noteTitle');
    let textField = document.getElementById('note');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    }else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push({
        'title': inputField.value,
        'note': textField.value,
    });
    localStorage.setItem('notes', JSON.stringify(notesObj));
    inputField.value = "";
    textField.value = "";
    console.log(notesObj);
    displayNotes();
})
// Adding function of note end

console.log(notesObj);

// Displaying function of notes start
function displayNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    }else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
            <div class="bg-white rounded-lg shadow-lg p-4">
            <h2 class="text-lg font-bold mb-2">${element.title}</h2>
            <p class="text-gray-700 mb-4">${element.note}</p>
            <div class="flex justify-between items-center">
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg
                 text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onclick="deleteNote(${index})">Delete</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" onclick="editNote(${index})">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
        </div>
        `
    })
    let cardsDiv = document.getElementById('noteCards');
    cardsDiv.innerHTML = html;
}
// Displaying function of notes end

// deleting function of note start
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
        notesObj = JSON.parse(notes);
        notesObj.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        displayNotes();
        console.log(notesObj);
}
// deleting function of note end

// editing function of note start
function editNote(index) {
    let notes = localStorage.getItem('notes');
    let specificNote;
    notesObj = JSON.parse(notes);
    specificNote = notesObj[index];
    console.log(specificNote)
    console.log(index);
    let editTitle = document.getElementById('noteTitle');
    let editNote = document.getElementById('note');
    editTitle.value = specificNote.title;
    editNote.value = specificNote.note;
    let textArea = document.getElementById('takingNotes');
    textArea.scrollIntoView({ behavior: 'smooth' });
    let updateBtn = `<button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onclick="updateNote(${index})">Update Note</button>`
    console.log(updateBtn);
    let btbDiv = document.getElementById('btnSection');
    btbDiv.innerHTML = updateBtn;
}
// editing function of note end

// updating function of note start
function updateNote(index) {
    let specificNote;
    let editedNote;
    let notes = localStorage.getItem('notes');
    notesObj = JSON.parse(notes);
    specificNote = notesObj[index];
    let editedTitle = document.getElementById('noteTitle');
    let editedTextarea = document.getElementById('note');
    editedNote = {
        title: editedTitle.value,
        note: editedTextarea.value
    }
    notesObj.splice(index, 1, editedNote);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    editedTitle.style.display = 'none';
    editedTextarea.style.display = 'none';
    let text = `<h1 class="text-xl font-bold text-blue-400">Note Successfully Updated</h1>
                <p class="text-lg font-medium mt-2.5">For adding new note reload the page</p>`
    let divBtn = document.getElementById('btnSection');
    divBtn.innerHTML = text;
    displayNotes();
    console.log(index);
    console.log(specificNote);
    console.log(editedTitle, editedTextarea);
}
// updating function of note end