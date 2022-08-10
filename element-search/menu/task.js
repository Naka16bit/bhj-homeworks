let mainMenus = document.getElementsByClassName("menu_main");
for (let mainMenu of mainMenus) {
    let menuItems = mainMenu.querySelectorAll("ul.menu_main li.menu__item");
    for (let menuItem of menuItems) {
        let subMenus = menuItem.querySelectorAll("ul.menu_sub");
        for (let subMenu of subMenus) {
            menuItem.onclick = () => {
                
                if (subMenu.classList.contains("menu_active")) {
                    deactivate();
                }
                else {
                    deactivate();
                    subMenu.classList.add("menu_active");
                    return false;
                }
            }
        }
    }
}

function deactivate() {
    let activeMenu = document.querySelector("ul.menu_active");
     if (activeMenu !== null) {
        activeMenu.classList.remove("menu_active");
     }
    
}