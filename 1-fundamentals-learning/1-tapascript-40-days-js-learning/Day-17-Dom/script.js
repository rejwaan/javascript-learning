// dom

console.log(document);

// id selection

let titleElem = document.getElementById("heading");
console.log(titleElem);


// class selection

let infoElems = document.getElementsByClassName("info");
console.log(infoElems);

// show in console - method 1
console.log(infoElems[0], infoElems[1]);

// method 2
[...infoElems].forEach((elem) => {
    console.log(elem);
});



// tag selection

let pTagElems = document.getElementsByTagName("p");
console.log(pTagElems);


//=============================================

// Query selector and Query selector All

// Query selector

let para = document.querySelector("p.info");
console.log("using Query selector",para);

// Query selector All

let paras = document.querySelectorAll("p.info");
console.log("using query all", paras);

let hOne = document.querySelector("#heading");
console.log(hOne);


//=============================================
// mini project - 1

function highlightText() {
    console.log("About to highlight text..");

    let elements = document.querySelectorAll("p.info");

    elements.forEach((element) => {
        element.style.backgroundColor = "yellow";
    });
}

function redBackground() {
    let setback = document.querySelector("body");

    setback.style.backgroundColor = "red";
}