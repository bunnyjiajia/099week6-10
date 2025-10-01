// Lesson 1: Arrays, Objects, and Functions
 
// 1. Create an empty array to hold the quotes
const quotes = [
 
]
 
/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
    if (typeof quote.id !== 'number' || typeof quote.content!== 'string' || typeof quote.author!== 'string' ) throw  Error("can't push");
    return quotes.push(quote)
  // TODO: Add the quote object to the quotes array
}
addQuote({ id: 1, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' })
addQuote({ id: 2, content: 'Do or do not. There is no try.', author: 'Yoda' })
addQuote({
    id: 3,
    content: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci'
})
console.log(quotes);
 
 
/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
    const index = quotes.findIndex((q) => q.id === id);
    if (index !== -1) {
        quotes.splice(index, 1);
    }
  // TODO: Remove the quote object from the array using the given id
}
deleteQuote(2)
console.log(quotes);
 
/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
    const quote = quotes.find((q) => q.id === id);
    if (quote) {
        if (updatedQuote.content) quote.content = updatedQuote.content;
        if (updatedQuote.author) quote.author = updatedQuote.author;
    }
  // TODO: Find the quote by id and update its properties
}
updateQuote(1, { content: "Innovation distinguishes between a leader and a follower." });
console.log("After updating id=1:", quotes);
/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
    return quotes;
  // TODO: Return the quotes array
}
 
// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 4, content: "Knowledge is power.", author: "Francis Bacon" });
addQuote({ id: 5, content: "I think, therefore I am.", author: "René Descartes" });
addQuote({ id: 6, content: "The unexamined life is not worth living.", author: "Socrates" });

// TODO: Delete 1 quote using deleteQuote()
deleteQuote(3);

// TODO: Update 1 quote using updateQuote()
updateQuote(5, { author: "Descartes" });

// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes());