document.addEventListener("DOMContentLoaded",function(){
    const bgColor = localStorage.getItem("bgColor")
    const FColor = localStorage.getItem("FColor")
    const fontSize = localStorage.getItem("fontSize")

    if (bgColor) document.body.style.backgroundColor = bgColor;
    if (FColor) document.body.style.color = FColor;
    if (fontSize) {
        if (fontSize === "small")document.body.style.fontSize = "14px";
        if (fontSize === "medium")document.body.style.fontSize = "18px";
        if (fontSize === "large")document.body.style.fontSize = "124px";
    }

    if (bgColor) document.getElementById("bgColor").value = bgColor;
    if (FColor) document.getElementById("FColor").value = FColor;
    if (fontSize) document.getElementById("fontSize").value = fontSize;

})

document.getElementById("saveBtn").addEventListener("click",function () {
    const bgColor= document.getElementById("bgColor").value 
    const FColor=document.getElementById("FColor").value 
    const fontSize= document.getElementById("fontSize").value 

    localStorage.setItem("bgColor",bgColor)
    localStorage.setItem("FColor",FColor)
    localStorage.setItem("fontSize",fontSize)

    document.body.style.backgroundColor = bgColor
    document.body.style.color = FColor
    if (fontSize === "small")document.body.style.fontSize = "14px";
    if (fontSize === "medium")document.body.style.fontSize = "18px";
    if (fontSize === "large")document.body.style.fontSize = "124px";
})


document.getElementById("resetBtn").addEventListener("click",function () {
    localStorage.clear()
    location.reload()
})
