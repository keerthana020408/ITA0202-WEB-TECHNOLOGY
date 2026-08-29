/* =====================================================
   EXPERIMENT 10
   STUDENT REGISTRATION FORM VALIDATION
===================================================== */


/* ================= FORM ================= */

const form =
    document.getElementById("registrationForm");


/* ================= INPUTS ================= */

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const registerInput =
    document.getElementById("registerNumber");

const courseInput =
    document.getElementById("course");

const yearInput =
    document.getElementById("year");

const passwordInput =
    document.getElementById("password");

const termsInput =
    document.getElementById("terms");


/* ================= SUCCESS CARD ================= */

const successCard =
    document.getElementById("successCard");

const studentName =
    document.getElementById("studentName");

const studentCourse =
    document.getElementById("studentCourse");


/* =====================================================
   VALIDATION FUNCTION
===================================================== */

function validateForm() {


    let valid = true;


    /* CLEAR PREVIOUS ERRORS */

    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("phoneError").textContent = "";

    document.getElementById("registerError").textContent = "";

    document.getElementById("courseError").textContent = "";

    document.getElementById("yearError").textContent = "";

    document.getElementById("genderError").textContent = "";

    document.getElementById("passwordError").textContent = "";

    document.getElementById("termsError").textContent = "";


    /* ================= NAME ================= */

    const name =
        nameInput.value.trim();


    if (name === "") {

        document.getElementById("nameError").textContent =
            "Please enter your name.";

        valid = false;

    }

    else if (name.length < 3) {

        document.getElementById("nameError").textContent =
            "Name must contain at least 3 characters.";

        valid = false;

    }


    /* ================= EMAIL ================= */

    const email =
        emailInput.value.trim();


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        document.getElementById("emailError").textContent =
            "Please enter your email.";

        valid = false;

    }

    else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email.";

        valid = false;

    }


    /* ================= PHONE ================= */

    const phone =
        phoneInput.value.trim();


    const phonePattern =
        /^[0-9]{10}$/;


    if (phone === "") {

        document.getElementById("phoneError").textContent =
            "Please enter your mobile number.";

        valid = false;

    }

    else if (!phonePattern.test(phone)) {

        document.getElementById("phoneError").textContent =
            "Mobile number must contain 10 digits.";

        valid = false;

    }


    /* ================= REGISTER NUMBER ================= */

    const registerNumber =
        registerInput.value.trim();


    if (registerNumber === "") {

        document.getElementById("registerError").textContent =
            "Please enter your register number.";

        valid = false;

    }


    /* ================= COURSE ================= */

    if (courseInput.value === "") {

        document.getElementById("courseError").textContent =
            "Please select your course.";

        valid = false;

    }


    /* ================= YEAR ================= */

    if (yearInput.value === "") {

        document.getElementById("yearError").textContent =
            "Please select your year.";

        valid = false;

    }


    /* ================= GENDER ================= */

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    if (!gender) {

        document.getElementById("genderError").textContent =
            "Please select your gender.";

        valid = false;

    }


    /* ================= PASSWORD ================= */

    const password =
        passwordInput.value;


    if (password === "") {

        document.getElementById("passwordError").textContent =
            "Please create a password.";

        valid = false;

    }

    else if (password.length < 6) {

        document.getElementById("passwordError").textContent =
            "Password must contain at least 6 characters.";

        valid = false;

    }


    /* ================= TERMS ================= */

    if (!termsInput.checked) {

        document.getElementById("termsError").textContent =
            "Please accept the terms and conditions.";

        valid = false;

    }


    return valid;

}


/* =====================================================
   FORM SUBMIT
===================================================== */

form.addEventListener(
    "submit",
    function(event) {


        /* STOP PAGE RELOAD */

        event.preventDefault();


        /* VALIDATE */

        if (validateForm()) {


            /* SHOW SUCCESS CARD */

            successCard.style.display =
                "block";


            /* DISPLAY STUDENT INFORMATION */

            studentName.textContent =
                "👤 " +
                nameInput.value;


            studentCourse.textContent =
                "🎓 " +
                courseInput.value;


            /* SCROLL TO SUCCESS */

            successCard.scrollIntoView({
                behavior: "smooth"
            });

        }

        else {

            successCard.style.display =
                "none";

        }

    }
);


/* =====================================================
   CLEAR FORM
===================================================== */

document
    .getElementById("clearButton")
    .addEventListener(
        "click",
        function() {

            successCard.style.display =
                "none";

            document
                .querySelectorAll("small")
                .forEach(
                    function(error) {

                        error.textContent = "";

                    }
                );

        }
    );