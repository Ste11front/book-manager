class DBService {

    static getAllBooks() {
        const url = 'https://64b51348f3dbab5a95c6a622.mockapi.io/Books';
        return fetch(url)
            .then(resp => resp.json())
            .then(result => this.convertToBookArray(result))
            .catch(error => console.log(error.message));
    }

    static deleteBook(id) {
        console.log('delete', id);
        const deleteUrl = 'https://64b51348f3dbab5a95c6a622.mockapi.io/Books' + id;
        console.log(deleteUrl);
        return fetch(deleteUrl, { method: 'delete' }).then(resp => resp.json());
    }

    static updateBook(book) {

    }

    static saveBook(book) {

    }



    static convertToBookArray(genericArray) {

        const tempArray = [];

        for (const obj of genericArray) {
            const newBook = new Book(obj.title, obj.author, obj.dop, obj.genre, obj.cover, obj.isCompleted, new Date(obj.creationDate), obj.id)
            tempArray.push(newBook);
        }

        return tempArray;

    }


}