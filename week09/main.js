// 1. เลือกปุ่ม <button>
const okButton = document.querySelector('div > button')

// เพิ่ม event listener เมื่อคลิกปุ่ม
okButton.addEventListener("click", (event) => {
  console.log("== Button Clicked ==")
  console.log(`event.target :`, event.target)
  console.log(`event.currentTarget :`, event.currentTarget)
  console.log(`event.eventPhase :`, event.eventPhase)
  console.log(`event.type :`, event.type)
})

// 2. เลือก <div>
const divElement = document.querySelector("div")

divElement.addEventListener("click", (event) => {
  console.log("== Div Clicked ==")
  console.log(`event.target :`, event.target)
  console.log(`event.currentTarget :`, event.currentTarget)
})

// 3. เลือก <body>
const bodyElement = document.body

bodyElement.addEventListener("click", (event) => {
  console.log("== Body Clicked ==")
  console.log(`event.target :`, event.target)
  console.log(`event.currentTarget :`, event.currentTarget)
})

//4. เลือก input field by name
const inputFname = document.querySelector("input[name='fname']")
console.log("== Input Element ==")
console.log(inputFname)
