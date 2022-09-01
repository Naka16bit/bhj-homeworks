const elements = document.querySelectorAll(".has-tooltip");
const positions = {
    top: function(tooltip, element) {
        const rectTooltip = tooltip.getBoundingClientRect();
        const rectElement = element.getBoundingClientRect();
        tooltip.style.left = `${rectElement.left}px`;
        tooltip.style.top = `${rectElement.top - rectTooltip.height}px`;
    },
    left: function(tooltip, element) {
        const rectTooltip = tooltip.getBoundingClientRect();
        const rectElement = element.getBoundingClientRect();
        tooltip.style.left = `${rectElement.left - rectTooltip.width}px`;
        tooltip.style.top = `${rectElement.top}px`;
    },
    right: function(tooltip, element) {
        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.right}px`;
        tooltip.style.top = `${rect.top}px`;
    },
    bottom:  function(tooltip, element) {
        const rectElement = element.getBoundingClientRect();
        tooltip.style.left = `${rectElement.left}px`;
        tooltip.style.top = `${rectElement.bottom}px`;
    }
}

elements.forEach(element => { 
    element.addEventListener("click", (e) => {
        e.preventDefault();

        const oldTooltip = document.querySelector(".tooltip");
        let shouldShow = true;
        if (oldTooltip !== null) {
            oldTooltip.remove();
            shouldShow = oldTooltip.innerText !== element.getAttribute("title");
        }
        if (shouldShow) {
            showTooltip(element, "top");
        }
    })
})

function showTooltip(element, position) {
    const tooltip = document.createElement("div");
    tooltip.innerText = element.getAttribute("title");
    tooltip.classList.add("tooltip", "tooltip_active");
    tooltip.setAttribute("position", position);
    element.insertAdjacentElement("afterEnd", tooltip);

    positions[position](tooltip, element);
}

window.addEventListener("scroll", () => {
    const tooltipActive = document.querySelector(".tooltip_active");
    if (tooltipActive !== null) {
        tooltipActive.classList.remove("tooltip_active");
    };
})