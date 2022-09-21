console.clear();
const div = document.querySelector('div');

div.addEventListener("mousedown", () => {
    console.log("mousedown");
})
div.addEventListener("mouseup", () => {
    console.log("mouseup");
})

div.addEventListener("mouseenter", () => {
    console.log("mouseenter");
})

div.addEventListener("mouseleave", () => {
    console.log("mouseleave");
})

