const messageLabel = document.getElementById("message-label");
const message = document.getElementById("message");

messageLabel.addEventListener("click", () => {
    message.focus();
});
