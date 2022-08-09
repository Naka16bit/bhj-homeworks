let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");


modalMain.classList.add("modal_active");

let closeElements = Array.from(document.getElementsByClassName("modal__close"));
closeElements.forEach(item => item.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.remove("modal_active");
})

document.getElementsByClassName("show-success").item(0).onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}