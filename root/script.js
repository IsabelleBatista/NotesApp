const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote() )
function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML= `
        <div class="tools">
            <button class="edit"> <i class="fa-solid fa-edit"></i> </button>
            <button class="delete"> <i class="fa-solid fa-trash-alt"></i> </button>
        </div>
        
        <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="main ${text ? "hidden" : ""}"></textarea>
    `

    document.body.appendChild(note)
} 


