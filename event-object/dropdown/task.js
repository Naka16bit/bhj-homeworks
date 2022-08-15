let buttons = document.getElementsByClassName("dropdown");
for (let button of buttons) {
    button.addEventListener("click", () => {
        let list = button.querySelector("ul.dropdown__list");
        if (list.classList.contains("dropdown__list_active")) {
            list.classList.remove("dropdown__list_active");
        } else {
            list.classList.add("dropdown__list_active");
        }
    })

    let links = Array.from(button.querySelectorAll("a.dropdown__link"));
    let value = button.querySelector(".dropdown__value");
    for (let link of links) {
        link.onclick = function changeText() {
            value.textContent = link.textContent;
            return false;
        }
    }
}