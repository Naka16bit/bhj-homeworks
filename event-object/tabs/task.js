let menus = document.querySelectorAll(".tabs");
for (let menu of menus) {
    let tabs = Array.from(menu.querySelectorAll(".tab"));
    let contents = Array.from(menu.querySelectorAll(".tab__content"));

    for (let tab of tabs) {
        tab.addEventListener("click", () => {
            if (!tab.classList.contains("tab_active")) {
                tabs.forEach(item => item.classList.remove("tab_active"));
                tab.classList.add("tab_active");
                let activeIndex = tabs.indexOf(tab);
                getContent(activeIndex);
            }
        })
    }

    function getContent(index) {
        contents.forEach(item => item.classList.remove("tab__content_active"));
        contents[index].classList.add("tab__content_active");
    }
}