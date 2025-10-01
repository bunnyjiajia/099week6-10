// create <p id='int141'>INT141</p> as a child of <div id="subject">

//1. create <p element
const divElement = document.getElementById("subject")
const pElement = document.createElement("p")
//1.5 create attribute id
pElement.setAttribute("id", "int141")
pElement.setAttribute("style", "color:red")
pElement.setAttribute("name", "core")

//2. create text node then 3. append to <p> child
const pText = document.createTextNode("INT141")
pElement.appendChild(pText)
// pElement.textContent = "INT141"

//4.append <p> with text node to div element
divElement.appendChild(pElement)

//get attribute value of 'id'
console.log(pElement.getAttribute("id")) //int141
console.log(pElement.attributes[0]) //id="int141"
console.log(pElement.attributes[0].ownerElement) //<p id="int141">INT141</p>

const pAttributes = pElement.attributes //get all attributes
for (let i = 0; i < pAttributes.length; i++) {
  const name = pAttributes[i].name //get attribute name
  const value = pAttributes[i].value //get attribute value
  if (pAttributes[i].name === "id") console.log(name, value)
}
