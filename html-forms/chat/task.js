const robotMessages = [
    "Здравствуйте, девочки",
    "Здравствуйте, мальчики",
    "Смотрите на меня в окно",
    "И мне кидайте свои пальчики, да",
    "Ведь я сажаю алюминиевые огурцы",
    "На брезентовом поле"
];

const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const input = document.getElementById("chat-widget__input");
const messagesContainer = document.querySelector(".chat-widget__messages-container");
let intervalId = null;

chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
    if (intervalId === null) {
        intervalId = setInterval(askQuestion, 30000);
    }
});

input.addEventListener("change", () => {
    messages.innerHTML += `
        <div class="message_client">
            <div class="message__time">
            ${getFormatedTime()}
            </div>
            <div class="message__text">
            ${input.value}
            </div>
        </div>
        <div class="message">
            <div class="message__time">
            ${getFormatedTime()}
            </div>
            <div class="message__text">
            ${robotMessages[Math.floor(Math.random() * robotMessages.length)]}
            </div>
        </div>
        `;
    input.value = "";
    messagesContainer.scrollBy(0, messagesContainer.getBoundingClientRect().bottom);
    
    clearInterval(intervalId);
    intervalId = setInterval(askQuestion, 30000);
})

function askQuestion() {
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">
            ${getFormatedTime()}
            </div>
            <div class="message__text">куку?</div>
        </div>
        `;
    messagesContainer.scrollBy(0, messagesContainer.getBoundingClientRect().bottom);
}

function getFormatedTime() {
    const time = new Date();
    return `${time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}`;
}