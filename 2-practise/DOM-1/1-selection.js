// DOM

// 1. id selection

const title = document.getElementById("title");
console.log(title);


// 2. class selection

const cards = document.getElementsByClassName("cards");
console.log(cards);


// 3. tag selection

const tagSelection = document.getElementsByTagName("h2");
console.log(tagSelection);


// 4. queryslector

//  id
const main = document.querySelector("#main");
console.log(main);

// class - return first match
const card = document.querySelector(".card");
console.log(card);