const fontsConfig = {
    small: "book_fs-small",
    big: "book_fs-big"
}

const colorConfig = {
    black: "book_color-black",
    gray: "book_color-gray",
    whitesmoke: "book_color-whitesmoke"
}

const backgroundConfig = {
    black: "book_bg-black",
    gray: "book_bg-gray",
    whitesmoke: "book_bg-whitesmoke"
}

const fontSizeButtons = Array.from(document.querySelectorAll("a.font-size"));
const colorButtons = Array.from(document.querySelectorAll("div.book__control_color a.color"));
const backgroundButtons = Array.from(document.querySelectorAll("div.book__control_background a.color"));
const book = document.querySelector("div.book");

function activate(button, arr, activeStatus) {
    arr.find(item => item.classList.contains(activeStatus)).classList.remove(activeStatus);
    button.classList.add(activeStatus);   
}

fontSizeButtons.forEach(fontSizeButton => {
    fontSizeButton.addEventListener("click", (e) => {
        activate(fontSizeButton, fontSizeButtons, "font-size_active");
        const fs = fontSizeButton.dataset.size;
        book.classList.remove(...[...book.classList].filter(n => n.indexOf("book_fs") !== -1));
        if (fs !== undefined) book.classList.add(fontsConfig[fs]);
        e.preventDefault();
    });
});

colorButtons.forEach(colorButton => {
    colorButton.addEventListener("click", (e) => {
        activate(colorButton, colorButtons, "color_active");
        const color = colorButton.dataset.textColor;
        book.classList.remove(...[...book.classList].filter(n => n.indexOf("book_color") !== -1));
        book.classList.add(colorConfig[color]);
        e.preventDefault();        
    });
});

backgroundButtons.forEach(backgroundButton => {
    backgroundButton.addEventListener("click", (e) => {
        activate(backgroundButton, backgroundButtons, "color_active");
        const background = backgroundButton.dataset.bgColor;
        book.classList.remove(...[...book.classList].filter(n => n.indexOf("book_bg") !== -1));
        book.classList.add(backgroundConfig[background]);
        e.preventDefault();
    });
});