function isVisible(block) {
    let {top, bottom} = block.getBoundingClientRect();
    let viewportHeight = window.innerHeight;
    let topVisible = top > 0 && top < viewportHeight;
    let bottomVisible = bottom > 0 && bottom < viewportHeight;
    return topVisible || bottomVisible;
}

function showVisible() {
    for (let block of document.querySelectorAll("div.reveal")) {
        if (isVisible(block)) {
            block.classList.add("reveal_active");
        } else {
            block.classList.remove("reveal_active");
        }
    }
}

window.onscroll = showVisible;