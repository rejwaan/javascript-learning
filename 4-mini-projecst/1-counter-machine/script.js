const number = document.getElementById("num");
let count = 0;


function increasecount() {
    count++;
    number.innerText = count;
}

function decreasecount() {
    count--;
    number.innerText = count;
}

function resetcount() {
    count = 0;
    number.innerText = count;
}