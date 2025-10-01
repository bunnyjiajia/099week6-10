
// part: drink list
// -----------------------------

// 1. find all drinks under <ul id="drink">
const drinkList = document.getElementById('drink');
const allDrinks = drinkList.children
Array.from(allDrinks).forEach((drink) => console.log(drink))

// 2. get <li>Tea</li>  and then
const teaDrink = Array.from(allDrinks).find(li => li.textContent.trim() === 'Tea');
console.log(teaDrink);

//  2.1 previous element sibling
console.log(teaDrink.previousElementSibling);  // <li>Coffee</li>

//  2.2 next element sibling
console.log(teaDrink.nextElementSibling); // <li>Juice</li>

//  2.3 parent element
console.log(teaDrink.parentElement); // <ul id="drink">...</ul>
