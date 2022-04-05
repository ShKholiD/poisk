const input = document.querySelector(".text");

input.addEventListener("input", txt);

function txt() {
    console.log(input.value);
}