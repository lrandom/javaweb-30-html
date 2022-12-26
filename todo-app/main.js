const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
renderList();
let selectedIndexItem = 0;
$('.btn-add').click(function () {
    $('.list-notes-screen').addClass('hidden');
    $('.add-note-screen').removeClass('hidden');
});

$('.btn-add-note').click(function () {
    const title = $('.add-note-screen input[name="title"]').val();
    const content = $('.add-note-screen textarea[name="content"]').val();
    if (title && content) {
        //xử lý logic
        notes.unshift({
            title,
            content
        })
        syncStorage();
        console.log(notes);
        renderList();
        $('.add-note-screen input[name="title"]').val('');
        $('.add-note-screen textarea[name="content"]').val('');
        $('.list-notes-screen').removeClass('hidden');
        $('.add-note-screen').addClass('hidden');
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
});

$('.btn-edit-note').click(function () {
    const title = $('.edit-note-screen input[name="title"]').val();
    const content = $('.edit-note-screen textarea[name="content"]').val();
    notes[selectedIndexItem].title = title;
    notes[selectedIndexItem].content = content;
    syncStorage();
    renderList();
    $('.list-notes-screen').removeClass('hidden');
    $('.edit-note-screen').addClass('hidden');
});

function syncStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderList() {
    $('.list-notes-screen .content ul').empty();
    for (let i = 0; i < notes.length; i++) {
        const htmlContent = `<li class="note-item">
                    <div>
                        <h5>${notes[i].title}</h5>
                        <p>${notes[i].content}</p>
                    </div>

                    <div>
                        <a href="javascript:void(0)" onclick="edit(${i})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                        </a>
                        <a href="javascript:void(0)" onclick="removeNoteItem(${i})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </a>
                    </div>
                </li>`;
        $('.list-notes-screen .content ul').append(htmlContent);
    }
}

function removeNoteItem(index) {
    notes.splice(index, 1);
    console.log(notes);
    renderList();
}

function edit(index) {
    $('.list-notes-screen').addClass('hidden');
    $('.edit-note-screen').removeClass('hidden');
    const selectedNote = notes[index];
    selectedIndexItem = index;
    $('.edit-note-screen input[name="title"]').val(selectedNote.title);
    $('.edit-note-screen textarea[name="content"]').val(selectedNote.content);
}


