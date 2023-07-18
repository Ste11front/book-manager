let manager;

DBService.getAllBooks().then(books => {
    manager = new Manager(books);
    render();
})


function render() {

    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';

    for (let i = 0; i < manager.bookArray.length; i++) {

        const book = manager.bookArray[i];

        const div = document.createElement('div');
        div.classList.add('book-card');

        if (todo.isCompleted) {
            div.style.borderColor = 'lime';
        }

        const titleStrong = document.createElement('strong');
        const coverCard = document.createElement('img');
        coverCard.src = book.cover
        const titleNode = document.createTextNode(book.title);

        titleStrong.appendChild(titleNode);

        div.appendChild(coverCard);
        div.appendChild(titleStrong);


        const deleteBtn = document.createElement('button');
        const deleteNode = document.createTextNode('cancella');
        deleteBtn.addEventListener('click', () => {

            DBService.deleteBook(book.id).then(() => {
                manager.deleteBook(i);
                render();
            });


        });

        deleteBtn.appendChild(deleteNode);
        div.appendChild(deleteBtn);


        const detailBtn = document.createElement('button');
        const detailBtnNode = document.createTextNode('dettaglio');
        detailBtn.addEventListener('click', () => {
            sessionStorage.setItem('selectedTodo', JSON.stringify(todo));
            window.location.href = './detail.html';
        });

        detailBtn.appendChild(detailBtnNode);
        div.appendChild(detailBtn);

        bookContainer.appendChild(div);
    }
}

function orderByTitle() {
    manager.orderBooksByTitle();
    render();
}

function orderByDate() {
    manager.orderBooksByDate();
    render();
}


function addBook() {
    const input = document.getElementById('add-book-input')
    const newBookTitle = input.value;
    if (newBookTitle.trim() !== '') {
        manager.addBookWithTitle(newBookTitle);
        input.value = '';
    }
    render();
}