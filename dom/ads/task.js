let rotators = Array.from(document.querySelectorAll("span.rotator"));
for (let i = 0; i < rotators.length; i++) {
    const start_case = Array.from(rotators[i].children).find(item => item.classList.contains("rotator__case_active"));
    const initial_timeout = start_case.dataset.speed;
    
    setTimeout(changeText, initial_timeout, rotators[i]);
}

function changeText(rotator) {
    const cases = Array.from(rotator.children);
    const previous_index = cases.findIndex(item => item.classList.contains("rotator__case_active"));
    const current_index = previous_index != cases.length - 1 ? previous_index + 1 : 0;
    
    const current_case = cases[current_index]
    const timeout = current_case.dataset.speed;
    const color = current_case.dataset.color;

    cases[previous_index].classList.remove("rotator__case_active");
    current_case.classList.add("rotator__case_active");
    current_case.style.color = color;
    setTimeout(changeText, timeout, rotator);
}