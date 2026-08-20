// ============================================
// EXPERIMENT 9
// Browser Developer Tools - Network Observation
// Student: Keerthana
// B.Tech Information Technology - II Year
// SIMATS Engineering
// ============================================



// ================= START TEST =================

function startObservation() {

    alert(
        "NETWORK TEST STARTED!\n\n" +
        "Now open Developer Tools using F12.\n\n" +
        "Select the Network tab and reload the page.\n\n" +
        "You can observe HTML, CSS, JavaScript, " +
        "fonts and other network requests."
    );

}



// ================= GET REQUEST =================

async function sendGetRequest() {

    const result =
        document.getElementById("get-result");

    result.innerText =
        "Sending GET request...";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = await response.json();

        result.innerText =
            "✓ Status: " +
            response.status +
            " | GET request successful";

        console.log("GET Response:", data);

    }

    catch (error) {

        result.innerText =
            "Request failed.";

        console.log(error);

    }

}



// ================= POST REQUEST =================

async function sendPostRequest() {

    const result =
        document.getElementById("post-result");

    result.innerText =
        "Sending POST request...";


    const studentData = {

        name: "Keerthana",

        course: "B.Tech Information Technology",

        year: "II Year",

        college: "SIMATS Engineering"

    };


    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify(studentData)

            }
        );


        const data =
            await response.json();


        result.innerText =
            "✓ Status: " +
            response.status +
            " | POST request successful";


        console.log(
            "POST Response:",
            data
        );

    }


    catch (error) {

        result.innerText =
            "Request failed.";

        console.log(error);

    }

}



// ================= IMAGE REQUEST =================

function loadImage() {

    const area =
        document.getElementById("image-area");


    area.innerHTML =
        '<img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" alt="Programming workspace">';


    console.log(
        "Image request generated."
    );

}