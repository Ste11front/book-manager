
const params = new URLSearchParams(window.location.search);

console.log(params);

console.log(params.get("personaggioDisney"))

DBService.readSingleBook(params.get("id")).then(book => console.log(book));