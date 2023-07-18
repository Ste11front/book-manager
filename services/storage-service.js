class StorageService{

    static saveData(data){
        const dataString = JSON.stringify(data);
        localStorage.setItem('bookArray', dataString);
    }

    static loadBooks(){

        const dataString = localStorage.getItem('bookArray');
        if (dataString) {
            const data = JSON.parse(dataString);

            const tempArray = [];

            for (const obj of data) {
                const newBook = new Book(obj.title, obj.author, obj.dop, obj.genre, obj.cover, obj.isCompleted, new Date(obj.creationDate), obj.id);
                tempArray.push(newBook);
            }

            return tempArray;
        }

        return null;
    }


}