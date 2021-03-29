// -------------------------------------
const btnCreate = document.querySelector('.ui.primary.button.ajouter');
const btnReset=document.querySelector('.ui.button.red');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let group = document.getElementById('group');
let biography = document.getElementById('biography');


let imageLoaded;
window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            imageLoaded = document.querySelector('#imgContact');
            imageLoaded.src = URL.createObjectURL(this.files[0]);
        }

    });
});
imageLoaded = document.querySelector('#imgContact');

btnReset.addEventListener('click',(event)=>{
    event.preventDefault();
    resetText();
})

//créer un élément contact
btnCreate.addEventListener('click', (event) => {
    event.preventDefault();
    addInformations(firstName.value, lastName.value, group.value, biography.value);
    resetText();
});

let container = document.createElement("div");
container.classList.add("nine");
container.classList.add("wide");
container.classList.add("column");
container.classList.add("c-grid1");
container.classList.add("myOverflow");
let ajout = document.querySelector(".ui.grid.ajout");
ajout.appendChild(container);


function addInformations(firstName, lastName, group, biography) {
    //---------------------------------------------------------------

    let container1 = document.createElement("div");
    container1.classList.add("ui");
    container1.classList.add("grid");
    container1.classList.add("white-c");
    container1.classList.add("nine-grid");

    let container11 = document.createElement("div");
    container11.classList.add("four");
    container11.classList.add("wide");
    container11.classList.add("column");

    let container111 = document.createElement("div");
    container111.classList.add("ui");
    container111.classList.add("image");
    container111.classList.add("circular");
    container111.classList.add("small");
    container111.classList.add("img-circular");
    let image = document.createElement("img");
    image.setAttribute("src", `${imageLoaded.src}`);



    let container12 = document.createElement("div");
    container12.classList.add("twelve");
    container12.classList.add("wide");
    container12.classList.add("column");
    let container121 = document.createElement("div");
    container121.classList.add("ui");
    container121.classList.add("grid");
    let container1211 = document.createElement("div");
    container1211.classList.add("fourteen");
    container1211.classList.add("wide");
    container1211.classList.add("column");
    container1211.classList.add("bio");
    let container1211_h4 = document.createElement("h4");
    container1211_h4.textContent = `${firstName} ${lastName}`;
    let container1211_h5 = document.createElement("h5");
    container1211_h5.innerHTML = `${group}`;
    let container1211_p = document.createElement("p");
    container1211_p.textContent = `${biography}`;


    let container1212 = document.createElement("div");
    container1212.classList.add("two");
    container1212.classList.add("wide");
    container1212.classList.add("column");
    let btn_supp = document.createElement("button");
    btn_supp.classList.add("delete-button");
    btn_supp.setAttribute("type", "submit");
    let btn_supp_i = document.createElement("i");
    btn_supp_i.classList.add("icon");
    btn_supp_i.classList.add("delete");
    btn_supp_i.classList.add("red");

    // let ajout2 = document.querySelector(".nine.wide.column.c-grid1")
    container.appendChild(container1);
    container1.appendChild(container11);
    container1.appendChild(container12);
    container111.appendChild(image);
    container11.appendChild(container111);
    container12.appendChild(container121);
    container121.appendChild(container1211);
    container121.appendChild(container1212);
    container1211.appendChild(container1211_h4);
    container1211.appendChild(container1211_h5);
    container1211.appendChild(container1211_p);
    container1212.appendChild(btn_supp);
    btn_supp.appendChild(btn_supp_i);

    btn_supp.addEventListener('click', (e) => {
        e.preventDefault();
        container.removeChild(container1);
    })
    return container1;
}

function resetText() {
    firstName.value = "";
    lastName.value = "";
    biography.value = "";
    imageLoaded.setAttribute("src","user.png");
}





// function ready(){
//     for(element of container){
//         btnSupp.addEventListener('click',)
//     }
// }
// let body = document.body

// function deleteContacts(){
//     buttonsSupp.forEach(element=>{
//         element.addEventListener('click',(e)=>{
//             list.removeChild(element.parentElement)
//         });
//     });
// }






