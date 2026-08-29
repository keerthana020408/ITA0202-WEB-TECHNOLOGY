/* =====================================================
   CO3 - EXPERIMENT 3
   INTERACTIVE EVENT REGISTRATION
===================================================== */


/* ================= GET ELEMENTS ================= */

const form =
    document.getElementById("eventForm");

const nameInput =
    document.getElementById("fullName");

const emailInput =
    document.getElementById("email");

const eventSelect =
    document.getElementById("eventName");

const categorySelect =
    document.getElementById("category");

const previewName =
    document.getElementById("previewName");

const previewEvent =
    document.getElementById("previewEvent");

const eventDisplay =
    document.getElementById("eventDisplay");

const statusMessage =
    document.getElementById("statusMessage");


/* =====================================================
   EVENT DISPLAY FUNCTION
===================================================== */

function showEvent(message) {

    eventDisplay.textContent =
        message;

}


/* =====================================================
   INTRINSIC EVENT
   onclick
===================================================== */

function buttonClicked() {

    showEvent(
        "onclick event: Register button clicked."
    );

}


/* =====================================================
   MODERN EVENT HANDLING
   addEventListener()
===================================================== */


/* ================= INPUT EVENT ================= */

nameInput.addEventListener(
    "input",
    function() {

        updatePreview();

        showEvent(
            "input event: Student name is being typed."
        );

    }
);


/* ================= FOCUS EVENT ================= */

emailInput.addEventListener(
    "focus",
    function() {

        showEvent(
            "focus event: Email field selected."
        );

    }
);


/* ================= BLUR EVENT ================= */

emailInput.addEventListener(
    "blur",
    function() {

        showEvent(
            "blur event: Email field left."
        );

    }
);


/* ================= CHANGE EVENT ================= */

eventSelect.addEventListener(
    "change",
    function() {

        previewEvent.textContent =
            eventSelect.value ||
            "Select an event to continue";

        showEvent(
            "change event: Event selection changed."
        );

    }
);


/* ================= MOUSEOVER EVENT ================= */

const registerButton =
    document.getElementById(
        "registerButton"
    );


registerButton.addEventListener(
    "mouseover",
    function() {

        showEvent(
            "mouseover event: Mouse entered Register button."
        );

    }
);


/* ================= MOUSEOUT EVENT ================= */

registerButton.addEventListener(
    "mouseout",
    function() {

        showEvent(
            "mouseout event: Mouse left Register button."
        );

    }
);


/* ================= SUBMIT EVENT ================= */

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            nameInput.value.trim();

        const email =
            emailInput.value.trim();

        const selectedEvent =
            eventSelect.value;


        if (
            name === "" ||
            email === "" ||
            selectedEvent === ""
        ) {

            statusMessage.textContent =
                "Please complete all required fields.";

            showEvent(
                "submit event: Registration needs more details."
            );

            return;

        }


        statusMessage.textContent =
            "Registration successful for " +
            name +
            "!";


        showEvent(
            "submit event: Registration form submitted successfully."
        );


    }
);


/* =====================================================
   UPDATE PREVIEW
===================================================== */

function updatePreview() {


    const name =
        nameInput.value.trim();


    if (name === "") {

        previewName.textContent =
            "Your Name";

        return;

    }


    previewName.textContent =
        name;


}


/* =====================================================
   CATEGORY CHANGE EVENT
===================================================== */

categorySelect.addEventListener(
    "change",
    function() {

        showEvent(
            "change event: Participant category changed to " +
            categorySelect.value
        );

    }
);