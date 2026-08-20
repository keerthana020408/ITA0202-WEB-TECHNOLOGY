// Get the form
const form = document.getElementById("registrationForm");

// Get password elements
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const result = document.getElementById("result");


// ------------------------------------
// Password Strength Checker
// ------------------------------------

password.addEventListener("input", function () {

    let value = password.value;

    if (value.length === 0) {

        strengthBar.style.width = "0%";
        strengthText.textContent = "Password strength";

    }

    else if (value.length < 6) {

        strengthBar.style.width = "30%";
        strengthBar.style.backgroundColor = "#C0392B";
        strengthText.textContent = "Weak password";

    }

    else if (value.length < 10) {

        strengthBar.style.width = "60%";
        strengthBar.style.backgroundColor = "#D68910";
        strengthText.textContent = "Medium password";

    }

    else {

        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "#176B5B";
        strengthText.textContent = "Strong password";

    }

});


// ------------------------------------
// Form Submit
// ------------------------------------

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const mobile = document.getElementById("mobile").value.trim();

    const department =
        document.getElementById("department").value;

    const year =
        document.getElementById("year").value;


    const passwordValue = password.value;

    const confirmPasswordValue =
        confirmPassword.value;


    // --------------------------------
    // Check Password
    // --------------------------------

    if (passwordValue !== confirmPasswordValue) {

        result.style.color = "#C0392B";

        result.textContent =
            "❌ Passwords do not match.";

        confirmPassword.focus();

        return;
    }


    // --------------------------------
    // Check Mobile Number
    // --------------------------------

    if (mobile.length !== 10 ||
        isNaN(mobile)) {

        result.style.color = "#C0392B";

        result.textContent =
            "❌ Please enter a valid 10-digit mobile number.";

        document.getElementById("mobile").focus();

        return;
    }


    // --------------------------------
    // Check Department
    // --------------------------------

    if (department === "") {

        result.style.color = "#C0392B";

        result.textContent =
            "❌ Please select your department.";

        return;
    }


    // --------------------------------
    // Check Year
    // --------------------------------

    if (year === "") {

        result.style.color = "#C0392B";

        result.textContent =
            "❌ Please select your year of study.";

        return;
    }


    // --------------------------------
    // Successful Registration
    // --------------------------------

    result.style.color = "#176B5B";

    result.textContent =
        "🎉 Registration Successful! Welcome, " +
        name + "!";


    // Show success message
    alert(
        "Registration Successful!\n\n" +
        "Welcome, " + name + "!"
    );

});


// ------------------------------------
// Reset Form
// ------------------------------------

form.addEventListener("reset", function () {

    setTimeout(function () {

        strengthBar.style.width = "0%";

        strengthText.textContent =
            "Password strength";

        strengthBar.style.backgroundColor =
            "#176B5B";

        result.textContent = "";

    }, 10);

});