card = document.querySelector(".card-base");
parent = document.querySelector("#parent");

card.remove();

for (let i = 0; i < 5; i++) {
    parent.appendChild(card.cloneNode(true));
}