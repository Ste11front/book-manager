class Manager{
    constructor(bookArray = []){
        this.bookArray = bookArray;
    }

    addBook(book){
        this.bookArray.push(book);
    }

    orderBooksByTitle(){
        this.bookArray.sort((book1,book2)=>book1.compareByTitle(book2));
    }

    orderBooksByDate(){
        this.bookArray.sort((book1,book2)=>book1.compareByDate(book2));
    }

    changeCompleteStatus(index){
        const book = this.bookArray[index];
        book.isCompleted = !todo.isCompleted;
    }

    deleteBook(index){

        this.bookArray.splice(index, 1);
    }

    addBookWithTitle(title){
        const newBook = new Book(title);
        this.addBook(newBook);
    }

}