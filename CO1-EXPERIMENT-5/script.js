// GET Form
const getForm = document.getElementById("getForm");

getForm.addEventListener("submit", function () {

    const name = document.getElementById("getName").value;

    alert(
        "GET Form Submitted!\n\n" +
        "Welcome, " + name + "!\n\n" +
        "The form data will appear in the URL."
    );

});


// POST Form
const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("postName").value;

    const email = document.getElementById("postEmail").value;

    const course = document.getElementById("postCourse").value;

    const message = document.getElementById("message");

    message.style.color = "#4E7A57";

    message.innerHTML =
        "✓ POST Form Submitted Successfully! " +
        "Welcome " + name +
        ". Your data is sent through the request body.";

    console.log("POST Data");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Course:", course);

});