const checkboxes = Array.from(document.querySelectorAll(".interest__check"));

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        checkChildren(checkbox);
        checkParents(checkbox);
    })
})

function checkChildren(checkbox) {
    const parentElement = checkbox.closest("li.interest");
    const children = Array.from(parentElement.querySelectorAll(".interest__check"));
    children.forEach((child) => {
        child.checked = checkbox.checked;
    })
}

function checkParents(checkbox) {
    
    if (checkbox.closest("ul").closest("li") !== null) {

        const parent = checkbox.closest("ul").closest("li").querySelector(".interest__check"); 
        const siblings = Array.from(checkbox.closest("ul").querySelectorAll(".interest__check"));
        
        if (siblings.every((sibling) => sibling.checked === true)) {
            parent.indeterminate = false;
            parent.checked = true;
        } else if (siblings.some((sibling) => sibling.checked === true || sibling.indeterminate === true)) {
            parent.indeterminate = true;
            parent.checked = false;
        } else {
            parent.indeterminate = false;
            parent.checked = false;
        }
        checkParents(parent);
    } 
}