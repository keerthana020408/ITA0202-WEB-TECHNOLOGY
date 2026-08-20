// ==========================================
// SIMATS ENGINEERING
// Web Technology - Experiment 10
// Student: Keerthana
// B.Tech Information Technology - II Year
// ==========================================


// ================= REGISTRATION FORM =================

const registrationForm =
    document.getElementById("registrationForm");


if (registrationForm) {

    registrationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;

            const course =
                document.getElementById("course").value;


            const message =
                document.getElementById("formMessage");


            message.innerHTML =
                "✓ Registration submitted successfully! " +
                "Welcome, " +
                name +
                ". Selected Program: " +
                course;


            message.style.color = "#18a999";

        }
    );

}



// ================= PAGE LOAD MESSAGE =================

console.log(
    "SIMATS Engineering Multi-Page Website Loaded"
);

console.log(
    "Student: Keerthana"
);

console.log(
    "Course: B.Tech Information Technology"
);

console.log(
    "Year: II Year"
);


// ================= ACTIVE PAGE =================

const currentPage =
    window.location.pathname.split("/").pop();


document.querySelectorAll("nav a").forEach(
    function(link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    }
);