function showMessage() {

    var name =
        document.getElementById("studentName").value;

    var studentMessage =
        document.getElementById("studentMessage").value;

    var message =
        document.getElementById("message");


    if (name.trim() === "") {

        message.style.color = "#b22222";

        message.textContent =
            "Please enter your name.";

        return false;
    }


    if (studentMessage.trim() === "") {

        message.style.color = "#b22222";

        message.textContent =
            "Please enter your message.";

        return false;
    }


    message.style.color = "#28704a";

    message.textContent =
        "✓ Thank you, " + name +
        "! Your message has been submitted successfully.";


    return false;
}