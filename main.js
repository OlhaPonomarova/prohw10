"use strict"

var users = [{
    id: 1,
    name: "Veronika",
    email: "vgroves0@vistaprint.com",
    age: 50,
    city: "Javhlant",
    gender: "Female",
    inn: 2604048463

}, {
    id: 2,
    name: "Correy",
    email: "cskidmore1@shop-pro.jp",
    age: 50,
    city: "Junglinster",
    gender: "Male",
    inn: 5396152028

}, {
    id: 3,
    name: "Chrissie",
    email: "csobieski2@go.com",
    age: 40,
    city: "Mercaderes",
    gender: "Female",
    inn: 7437115687

}, {
    id: 4,
    name: "Adrianna",
    email: "awharrier3@hud.gov",
    age: 33,
    city: "Manuel Cavazos Lerma",
    gender: "Non-binary",
    inn: 6292774004

}, {
    id: 5,
    name: "Fairlie",
    email: "feliasen4@bing.com",
    age: 34,
    city: "Радовиш",
    gender: "Female",
    inn: 5943534093
}]

function accordeonDropDown() {
    var content = this.nextElementSibling;
    var isHide = content.classList.contains("hide");

    if (isHide) {
        content.classList.replace("hide", "show");
    }
    else {
        content.classList.replace("show", "hide");
    }
    var arrow = this.querySelector("img");

    if (arrow) {
        arrow.classList.toggle("img-button");
    }

}


function accordeonCreate(accordionSelector, data) {

    var container = document.querySelector(accordionSelector);


    for (var item of data) {
        var title = document.createElement("h2");
        var img = document.createElement("img");
        var content = document.createElement("div");
        var avatar = document.createElement("div");
        var table = document.createElement("div");
        var list = document.createElement("ul");
        var lists = document.createElement("ul");


        title.onclick = accordeonDropDown;


        title.className = "title";
        img.className = "img";
        content.className = "accordeon-content hide";
        avatar.className = "accordeon-avatar";
        table.className = "accordeon-table";
        list.className = "accordeon-list";
        lists.className = "accordeon-list";

        img.src = "img/arrow.svg"


        title.innerHTML = item.name;
        avatar.innerHTML = "Avatar";
        list.innerHTML = `<li class="accordeon-item"> <b> inn:</b> ${item.inn}</li>  <li class="accordeon-item"> <b> name:</b> ${item.name}</li> <li class="accordeon-item"> <b> age:</b> ${item.age}</li>`;
        lists.innerHTML = ` <li class="accordeon-item"> <b> email:</b> ${item.email}</li> <li class="accordeon-item"> <b> city:</b> ${item.city}</li> <li class="accordeon-item"> <b> gender:</b> ${item.gender}</li> `;


        container.append(title, content);
        content.append(avatar, table);
        table.append(list, lists);
        title.append(img);
    }
}
accordeonCreate(".container", users);