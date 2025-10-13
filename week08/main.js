// 1. query by ID
const soupIdElement = document.getElementById("soup")
console.log(soupIdElement)

// 2. query by class
const veganElements = document.querySelectorAll(".vegan")
console.log(veganElements)

const meatElements = document.querySelectorAll(".meat")
console.log(meatElements)

// 3. get elements by name
const nameAttrElements = document.getElementsByName("fname")
console.log(nameAttrElements)

// 4. get elements by tag
const liElements = document.getElementsByTagName("li")
console.log(liElements)

// 5. get elements by class name
const veganClassElements = document.getElementsByClassName("vegan")
console.log(veganClassElements)
