const Handlebars = require("handlebars");

/* let card = document.querySelector(".card-base");
let parent = document.querySelector("#parent");

card.remove();

for (let i = 0; i < 5; i++) {
    parent.appendChild(card.cloneNode(true));
} */

let elem = document.querySelector("#template");
let template = Handlebars.compiles(elem);

let data = template({ data: "work please" });

let toAdd = document.querySelector(".hero");
toAdd.innerHTML += data;