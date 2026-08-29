/* =====================================================
   CO3 - EXPERIMENT 2
   DYNAMIC STUDENT REGISTRATION LIST USING DOM
===================================================== */


/* ================= GET ELEMENTS ================= */

const studentName =
    document.getElementById("studentName");

const department =
    document.getElementById("department");

const registerNumber =
    document.getElementById("registerNumber");

const addButton =
    document.getElementById("addButton");

const clearButton =
    document.getElementById("clearButton");

const studentList =
    document.getElementById("studentList");

const emptyMessage =
    document.getElementById("emptyMessage");

const studentCount =
    document.getElementById("studentCount");

const outputMessage =
    document.getElementById("outputMessage");


/* ================= STUDENT COUNT ================= */

let count = 0;


/* =====================================================
   ADD STUDENT
   createElement()
   appendChild()
===================================================== */

function addStudent() {


    /* GET INPUT VALUES */

    const name =
        studentName.value.trim();

    const dept =
        department.value;

    const regNo =
        registerNumber.value.trim();


    /* VALIDATION */

    if (
        name === "" ||
        dept === "" ||
        regNo === ""
    ) {

        alert(
            "Please fill all student details."
        );

        return;

    }


    /* ================================================
       CREATE TABLE ROW
       createElement()
    ================================================ */

    const row =
        document.createElement("tr");


    /* ================================================
       CREATE TABLE CELLS
    ================================================ */

    const numberCell =
        document.createElement("td");

    const nameCell =
        document.createElement("td");

    const departmentCell =
        document.createElement("td");

    const registerCell =
        document.createElement("td");

    const actionCell =
        document.createElement("td");


    /* ================================================
       ADD CONTENT
       textContent
    ================================================ */

    count++;

    numberCell.textContent =
        count;

    nameCell.textContent =
        name;

    departmentCell.textContent =
        dept;

    registerCell.textContent =
        regNo;


    /* ================================================
       ADD CSS CLASSES
    ================================================ */

    nameCell.classList.add(
        "name-cell"
    );

    departmentCell.classList.add(
        "dept-cell"
    );


    /* ================================================
       CREATE REMOVE BUTTON
       createElement()
    ================================================ */

    const removeButton =
        document.createElement("button");


    removeButton.textContent =
        "Remove";


    removeButton.classList.add(
        "remove-btn"
    );


    /* ================================================
       REMOVE FUNCTION
       parentElement
       remove()
    ================================================ */

    removeButton.addEventListener(
        "click",
        function() {


            /* FIND PARENT ROW */

            const studentRow =
                removeButton.parentElement.parentElement;


            /* REMOVE ROW */

            studentRow.remove();


            /* UPDATE COUNT */

            updateStudentCount();


            /* SHOW MESSAGE */

            outputMessage.textContent =
                "Student record removed successfully.";

        }
    );


    /* ================================================
       APPEND BUTTON TO CELL
       appendChild()
    ================================================ */

    actionCell.appendChild(
        removeButton
    );


    /* ================================================
       APPEND CELLS TO ROW
       appendChild()
    ================================================ */

    row.appendChild(
        numberCell
    );

    row.appendChild(
        nameCell
    );

    row.appendChild(
        departmentCell
    );

    row.appendChild(
        registerCell
    );

    row.appendChild(
        actionCell
    );


    /* ================================================
       APPEND ROW TO TABLE
       appendChild()
    ================================================ */

    studentList.appendChild(
        row
    );


    /* HIDE EMPTY MESSAGE */

    emptyMessage.style.display =
        "none";


    /* UPDATE COUNT */

    updateStudentCount();


    /* OUTPUT */

    outputMessage.textContent =
        name +
        " has been added successfully.";


    /* CLEAR INPUTS */

    studentName.value =
        "";

    department.value =
        "";

    registerNumber.value =
        "";

}


/* =====================================================
   UPDATE STUDENT COUNT
===================================================== */

function updateStudentCount() {


    /* children PROPERTY */

    const totalStudents =
        studentList.children.length;


    studentCount.textContent =
        totalStudents;


    /* UPDATE EMPTY MESSAGE */

    if (totalStudents === 0) {

        emptyMessage.style.display =
            "block";

        count = 0;

    }

    else {

        emptyMessage.style.display =
            "none";

    }

}


/* =====================================================
   CLEAR ALL
===================================================== */

function clearAllStudents() {


    /* REMOVE ALL CHILDREN */

    while (
        studentList.children.length > 0
    ) {

        studentList.children[0].remove();

    }


    /* RESET COUNT */

    count = 0;


    studentCount.textContent =
        "0";


    /* SHOW EMPTY MESSAGE */

    emptyMessage.style.display =
        "block";


    /* OUTPUT */

    outputMessage.textContent =
        "All student records have been cleared.";

}


/* =====================================================
   BUTTON EVENTS
===================================================== */

addButton.addEventListener(
    "click",
    addStudent
);


clearButton.addEventListener(
    "click",
    clearAllStudents
);


/* =====================================================
   ENTER KEY SUPPORT
===================================================== */

registerNumber.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            addStudent();

        }

    }
);