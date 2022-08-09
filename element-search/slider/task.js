let items = Array.from(document.getElementsByClassName("slider__item"));
let activeIndex = items.findIndex(item => item.classList.contains("slider__item_active"));
let dots = Array.from(document.getElementsByClassName("slider__dot"));

let arrowPriv = document.querySelector(".slider__arrow_prev");
arrowPriv.onclick = () => {
    getBack();
}

let arrowNext = document.querySelector(".slider__arrow_next");
arrowNext.onclick = () => {
    getForward();
}

function getForward() {
    deactivate();
    activeIndex === items.length - 1 ? activeIndex = 0 : activeIndex++;    
    activate();
}

function getBack() {
    deactivate();
    activeIndex === 0 ? activeIndex = items.length - 1 : activeIndex--;
    activate();
}

for (let dot of dots) {
    dot.onclick = () => {
        getImgByDot(dot);    
    }
}

function getImgByDot(activeDot) {
    deactivate();
    activeIndex = dots.indexOf(activeDot);
    activate();
}

let deactivate = () => {
    items[activeIndex].classList.remove("slider__item_active");
    dots[activeIndex].classList.remove("slider__dot_active");
}

let activate = () => {
    items[activeIndex].classList.add("slider__item_active");
    dots[activeIndex].classList.add("slider__dot_active");
}