const dataString = sessionStorage.getItem('selectedBook');
const detailContainer = document.getElementById('detail-container');
if (dataString) {
    const data = JSON.parse(dataString);
    console.log(data)
    const book = new Book(data.title, data.isCompleted, new Date(data.creationDate));
    console.log(book);
    detailContainer.innerHTML = `<h2>${book.title}</h2>
                                 <span> Autore: ${book.author}</span>
                                 <span> Anno di pubblicazione: ${book.dop}</span>
                                 <span> Genere: ${book.genre}</span>
                                 <img src="${book.cover}">
                                 <span>${book.creationDate.toISOString()}</span>`

}