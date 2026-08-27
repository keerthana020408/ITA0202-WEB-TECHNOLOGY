/* =====================================================
   EXPERIMENT 2
   STUDENT REGISTRATION FORM WITH VALIDATION
===================================================== */


/* ================= GET FORM ELEMENT ================= */

const form = document.getElementById("registrationForm");


/* ================= FORM SUBMIT EVENT ================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    validateForm();

});


/* ================= VALIDATION FUNCTION ================= */

function validateForm() {

    /* Get values using DOM */

    const name =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const dob =
        document.getElementById("dob").value;

    const department =
        document.getElementById("department").value;

    const year =
        document.getElementById("year").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const address =
        document.getElementById("address").value.trim();

    const terms =
        document.getElementById("terms").checked;


    /* Gender */

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    /* Error Variables */

    let valid = true;


    /* Clear previous errors */

    clearErrors();


    /* ================= REGULAR EXPRESSIONS ================= */


    /* Name Regex */

    const namePattern =
        /^[A-Za-z ]{3,50}$/;


    /* Email Regex */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    /* Mobile Regex */

    const mobilePattern =
        /^[6-9][0-9]{9}$/;


    /* Password Regex */

    const passwordPattern =
        /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;


    /* ================= NAME VALIDATION ================= */

    if (name === "") {

        showError(
            "nameError",
            "Please enter your full name."
        );

        valid = false;

    }

    else if (!namePattern.test(name)) {

        showError(
            "nameError",
            "Name must contain only letters and spaces."
        );

        valid = false;

    }


    /* ================= EMAIL VALIDATION ================= */

    if (email === "") {

        showError(
            "emailError",
            "Please enter your email address."
        );

        valid = false;

    }

    else if (!emailPattern.test(email)) {

        showError(
            "emailError",
            "Please enter a valid email address."
        );

        valid = false;

    }


    /* ================= MOBILE VALIDATION ================= */

    if (mobile === "") {

        showError(
            "mobileError",
            "Please enter your mobile number."
        );

        valid = false;

    }

    else if (!mobilePattern.test(mobile)) {

        showError(
            "mobileError",
            "Enter a valid 10-digit Indian mobile number."
        );

        valid = false;

    }


    /* ================= DATE VALIDATION ================= */

    if (dob === "") {

        showError(
            "dobError",
            "Please select your date of birth."
        );

        valid = false;

    }


    /* ================= GENDER VALIDATION ================= */

    if (!gender) {

        showError(
            "genderError",
            "Please select your gender."
        );

        valid = false;

    }


    /* ================= DEPARTMENT ================= */

    if (department === "") {

        showError(
            "departmentError",
            "Please select your department."
        );

        valid = false;

    }


    /* ================= YEAR ================= */

    if (year === "") {

        showError(
            "yearError",
            "Please select your year of study."
        );

        valid = false;

    }


    /* ================= PASSWORD ================= */

    if (password === "") {

        showError(
            "passwordError",
            "Please create a password."
        );

        valid = false;

    }

    else if (!passwordPattern.test(password)) {

        showError(
            "passwordError",
            "Password must be at least 8 characters with letters and numbers."
        );

        valid = false;

    }


    /* ================= CONFIRM PASSWORD ================= */

    if (confirmPassword === "") {

        showError(
            "confirmPasswordError",
            "Please confirm your password."
        );

        valid = false;

    }

    else if (password !== confirmPassword) {

        showError(
            "confirmPasswordError",
            "Passwords do not match."
        );

        valid = false;

    }


    /* ================= ADDRESS ================= */

    if (address === "") {

        showError(
            "addressError",
            "Please enter your address."
        );

        valid = false;

    }

    else if (address.length < 10) {

        showError(
            "addressError",
            "Address must contain at least 10 characters."
        );

        valid = false;

    }


    /* ================= TERMS ================= */

    if (!terms) {

        showError(
            "termsError",
            "Please accept the Terms & Conditions."
        );

        valid = false;

    }


    /* ================= SUCCESS ================= */

    if (valid) {

        const successMessage =
            document.getElementById("successMessage");

        successMessage.classList.add("show");

        successMessage.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= SHOW ERROR FUNCTION ================= */

function showError(id, message) {

    const errorElement =
        document.getElementById(id);

    errorElement.textContent = "⚠ " + message;

}


/* ================= CLEAR ERRORS ================= */

function clearErrors() {

    const errors =
        document.querySelectorAll(
            ".form-group small, .terms small"
        );

    errors.forEach(function (error) {

        error.textContent = "";

    });


    document
        .getElementById("successMessage")
        .classList.remove("show");

}


/* ================= RESET EVENT ================= */

document
    .getElementById("resetButton")
    .addEventListener("click", function () {

        clearErrors();

    });