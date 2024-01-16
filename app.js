"use strict";

const getProchainDeparts = async () => {
    const res = await fetch("https://transport.opendata.ch/v1/stationboard?station=Yverdon-les-Bains&limit=10");
    const data = await res.json();
    console.log(data);
    data.stationboard.forEach(element => {
        creeArticle(element);
        console.log(element)
     });
}

getProchainDeparts();

const board = document.querySelector("#board");

const creeArticle = (numero) =>{
    const html = `<article>
    <div class="time">${numero.stop.departure}</div>
    <div class="category" data-category="${numero.category}">${numero.category}</div>
    <div class="destination">${numero.to}</div>
    </article>`;
    board.insertAdjacentHTML("beforebegin", html);
}
