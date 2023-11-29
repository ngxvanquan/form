const messageLabel = document.getElementById("message-label");
const message = document.getElementById("message");

messageLabel.addEventListener("click", () => {
    message.focus();
});

var onResize = (e) => {
    e.style.height = "auto";
    e.style.height = e.scrollHeight + 3 + "px";
};
