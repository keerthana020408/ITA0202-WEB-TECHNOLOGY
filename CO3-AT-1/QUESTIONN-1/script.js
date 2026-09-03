// Get HTML elements using DOM

const displayBtn = document.getElementById("displayBtn");
const removeBtn = document.getElementById("removeBtn");
const profileArea = document.getElementById("profileArea");
const toast = document.getElementById("toast");


// Display Profile Button

displayBtn.addEventListener("click", function () {

    // Get values from input fields

    const name =
        document.getElementById("studentName").value.trim();

    const registerNumber =
        document.getElementById("registerNumber").value.trim();

    const department =
        document.getElementById("department").value.trim();

    const year =
        document.getElementById("year").value;


    // Validate fields

    if (
        name === "" ||
        registerNumber === "" ||
        department === "" ||
        year === ""
    ) {

        showMessage("⚠️ Please fill all the fields.");

        return;
    }


    // Clear previous profile

    profileArea.textContent = "";


    // Create main profile element

    const profile = document.createElement("div");

    profile.classList.add("profile");


    // Create profile top section

    const profileTop = document.createElement("div");

    profileTop.classList.add("profile-top");


    // Create avatar

    const avatar = document.createElement("div");

    avatar.classList.add("profile-avatar");

    avatar.textContent = "🎓";


    // Create student information

    const studentInfo = document.createElement("div");


    const heading = document.createElement("h2");

    heading.textContent = name;


    const subHeading = document.createElement("p");

    subHeading.textContent = "Student Profile";


    studentInfo.appendChild(heading);

    studentInfo.appendChild(subHeading);


    profileTop.appendChild(avatar);

    profileTop.appendChild(studentInfo);


    // Create details section

    const details = document.createElement("div");

    details.classList.add("profile-details");


    // Student Name

    const nameDetail = createDetail(
        "👤",
        "STUDENT NAME",
        name
    );


    // Register Number

    const regDetail = createDetail(
        "🆔",
        "REGISTER NUMBER",
        registerNumber
    );


    // Department

    const deptDetail = createDetail(
        "💻",
        "DEPARTMENT",
        department
    );


    // Year

    const yearDetail = createDetail(
        "📚",
        "YEAR OF STUDY",
        year
    );


    // Add details

    details.appendChild(nameDetail);

    details.appendChild(regDetail);

    details.appendChild(deptDetail);

    details.appendChild(yearDetail);


    // Create year badge

    const badge = document.createElement("span");

    badge.classList.add("year-badge");

    badge.textContent =
        "✓ " + year + " • Active Student";


    // Build profile

    profile.appendChild(profileTop);

    profile.appendChild(details);

    profile.appendChild(badge);


    // Add profile to webpage

    profileArea.appendChild(profile);


    // Show success message

    showMessage("✨ Profile created successfully!");

});


// Remove Profile Button

removeBtn.addEventListener("click", function () {

    // Remove existing profile

    profileArea.textContent = "";


    // Create empty profile

    const empty = document.createElement("div");

    empty.classList.add("empty-profile");


    const icon = document.createElement("div");

    icon.classList.add("empty-icon");

    icon.textContent = "👤";


    const heading = document.createElement("h3");

    heading.textContent =
        "Your Profile Appears Here";


    const message = document.createElement("p");

    message.textContent =
        "Fill in your details and click Display Profile";


    empty.appendChild(icon);

    empty.appendChild(heading);

    empty.appendChild(message);


    profileArea.appendChild(empty);


    showMessage("🗑️ Profile removed.");

});


// Function to create profile details

function createDetail(iconText, labelText, valueText) {

    const detail = document.createElement("div");

    detail.classList.add("detail");


    const icon = document.createElement("div");

    icon.classList.add("detail-icon");

    icon.textContent = iconText;


    const text = document.createElement("div");

    text.classList.add("detail-text");


    const label = document.createElement("small");

    label.textContent = labelText;


    const value = document.createElement("strong");

    value.textContent = valueText;


    text.appendChild(label);

    text.appendChild(value);


    detail.appendChild(icon);

    detail.appendChild(text);


    return detail;
}


// Toast message function

function showMessage(message) {

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);
}
