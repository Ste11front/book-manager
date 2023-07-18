class Book{
    constructor(title, author, dop, genre, cover, isCompleted = false, creationDate = new Date(), id){
        this.title = title;
        this.author = author;
        this.dop = dop;
        this.genre = genre;
        this.cover = cover;
        this.isCompleted = isCompleted;
        this.creationDate = creationDate;
        this.id = id;
    }

    compareByTitle(book){
        return this.title.localeCompare(book.title);
    }

    compareByDate(book){
        return book.creationDate.getTime() - this.creationDate.getTime();
    }
}