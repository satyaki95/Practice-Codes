const form = document.querySelector("form");

const name = form.querySelector("#name");


form.addEventListener("submit", handel);

function handel(e){
    e.preventDefault();
    const info = {
        name: name.value,
    }
    console.log(name.value);
}