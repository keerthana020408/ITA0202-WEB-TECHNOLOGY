/* =====================================================
   EXPERIMENT 4
   STUDENT RESULT ANALYSIS SYSTEM
===================================================== */


/* ================= FORM EVENT ================= */

document
    .getElementById("resultForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        analyzeResult();

    });



/* ================= MAIN FUNCTION ================= */

function analyzeResult() {


    /* GET STUDENT DETAILS */

    const studentName =
        document.getElementById("studentName").value.trim();

    const registerNo =
        document.getElementById("registerNo").value.trim();


    /* ================= VALIDATION ================= */

    if (studentName === "" || registerNo === "") {

        alert("Please enter student name and register number.");

        return;

    }


    /* ================= MARKS ARRAY ================= */

    const marks = [

        Number(document.getElementById("web").value),

        Number(document.getElementById("cloud").value),

        Number(document.getElementById("compiler").value),

        Number(document.getElementById("vision").value),

        Number(document.getElementById("bigdata").value)

    ];


    /* CHECK MARKS */

    for (let i = 0; i < marks.length; i++) {

        if (
            marks[i] < 0 ||
            marks[i] > 100 ||
            isNaN(marks[i])
        ) {

            alert(
                "Please enter valid marks between 0 and 100."
            );

            return;

        }

    }


    /* ================= SUBJECT OBJECTS ================= */

    const subjects = [

        {
            name: "Web Technology",
            mark: marks[0]
        },

        {
            name: "Cloud Computing",
            mark: marks[1]
        },

        {
            name: "Compiler Design",
            mark: marks[2]
        },

        {
            name: "Computer Vision",
            mark: marks[3]
        },

        {
            name: "Big Data Analytics",
            mark: marks[4]
        }

    ];


    /* ================= TOTAL ================= */

    let total = 0;


    /* LOOP */

    for (let i = 0; i < marks.length; i++) {

        total += marks[i];

    }


    /* ================= AVERAGE ================= */

    const average =
        total / marks.length;


    /* ================= MAX AND MIN ================= */

    const highest =
        Math.max(...marks);


    const lowest =
        Math.min(...marks);


    /* ================= DISPLAY STUDENT ================= */

    document
        .getElementById("resultStudentName")
        .textContent = studentName;


    document
        .getElementById("resultRegisterNo")
        .textContent =
        "Register No: " + registerNo;


    /* ================= DISPLAY STATISTICS ================= */

    document
        .getElementById("totalMarks")
        .textContent =
        total + " / 500";


    document
        .getElementById("average")
        .textContent =
        average.toFixed(2);


    document
        .getElementById("highest")
        .textContent =
        highest;


    document
        .getElementById("lowest")
        .textContent =
        lowest;


    /* ================= OVERALL RESULT ================= */

    let passed = true;


    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 40) {

            passed = false;

        }

    }


    const status =
        document.getElementById("resultStatus");


    if (passed) {

        status.textContent =
            "✓ PASS";

    }

    else {

        status.textContent =
            "✗ FAIL";

    }


    /* ================= TABLE ================= */

    const table =
        document.getElementById("resultTable");


    table.innerHTML = "";


    /* LOOP THROUGH OBJECT ARRAY */

    for (
        let i = 0;
        i < subjects.length;
        i++
    ) {

        const subject =
            subjects[i];


        const grade =
            calculateGrade(subject.mark);


        const result =
            subject.mark >= 40
                ? "PASS"
                : "FAIL";


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${i + 1}</td>

            <td>${subject.name}</td>

            <td>${subject.mark}</td>

            <td class="grade">${grade}</td>

            <td>${result}</td>

        `;


        table.appendChild(row);

    }


    /* ================= PERFORMANCE MESSAGE ================= */

    const message =
        document.getElementById(
            "performanceMessage"
        );


    if (average >= 90) {

        message.textContent =
            "🏆 Outstanding performance! Keep up the excellent work.";

    }

    else if (average >= 75) {

        message.textContent =
            "🌟 Excellent performance! You are doing very well.";

    }

    else if (average >= 60) {

        message.textContent =
            "👍 Good performance! Continue working consistently.";

    }

    else if (average >= 40) {

        message.textContent =
            "📚 You passed. Focus more on improving your marks.";

    }

    else {

        message.textContent =
            "💪 Keep practicing and work harder for better results.";

    }


    /* SHOW RESULT */

    document
        .getElementById("resultSection")
        .classList.add("show");


    document
        .getElementById("resultSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ================= GRADE FUNCTION ================= */

function calculateGrade(mark) {


    if (mark >= 90) {

        return "A+";

    }

    else if (mark >= 80) {

        return "A";

    }

    else if (mark >= 70) {

        return "B+";

    }

    else if (mark >= 60) {

        return "B";

    }

    else if (mark >= 50) {

        return "C";

    }

    else if (mark >= 40) {

        return "D";

    }

    else {

        return "F";

    }

}



/* ================= RESET FUNCTION ================= */

function resetResult() {

    document
        .getElementById("resultSection")
        .classList.remove("show");

}