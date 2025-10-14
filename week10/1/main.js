
console.log(document.cookie);

document.cookie = `theme=dark;expire=${new Date(2025,9,15)}`
console.log(document.cookie);

document.cookie = "font-size=14px; max-age=60"
console.log(document.cookie);


