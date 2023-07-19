
// const service = new DBService();

// service.getPosts();


DBService.readBooks().then(res => render(res));

function render(books){

    const mainList = document.getElementById('main-list');
    mainList.innerHTML = '';

    for (const book of books) {
        mainList.innerHTML += `<li><a href="./detail.html?id=${book.id}">${book.title}</a></li>`
    }


}

// DBService.readSingleBook('1').then(res => console.log('read single',res));

// DBService.deleteBook('2').then(res => console.log('delete',res));

// const mioBook = {
//     title: 'super libro su js',
//     cover: "https://loremflickr.com/640/480/business",
//     dop: "2022-11-18T20:16:45.416Z",
//     genre: "informatica",
//     imdb: "6344666163453tdrdg",
//     author: "Manuela Ariotti"
// }

// DBService.createBook(mioBook);


// const manuelaBook = {
//     title: 'super libro su js',
//     cover: "https://loremflickr.com/640/480/business",
//     dop: "2022-11-18T20:16:45.416Z",
//     genre: "informatica",
//     id: "53",
//     imdb: "6344666163453tdrdg",
//     author: "Manuela Ariotti"
// }

// manuelaBook.title = manuelaBook.title + " NUOVA EDIZIONE PIU' FIGA"

// DBService.updateBook(manuelaBook);