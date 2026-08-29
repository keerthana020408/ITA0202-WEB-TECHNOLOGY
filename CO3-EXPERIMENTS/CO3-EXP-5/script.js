/* =====================================================
   CO3 - EXPERIMENT 5
   BROWSER HISTORY MANAGER
===================================================== */


/* ================= GET ELEMENTS ================= */

const historyLength =
    document.getElementById("historyLength");

const currentURL =
    document.getElementById("currentURL");

const navigationStatus =
    document.getElementById("navigationStatus");

const monitorMessage =
    document.getElementById("monitorMessage");

const statusMessage =
    document.getElementById("statusMessage");


/* ================= UPDATE INFORMATION ================= */

function updateHistoryInfo() {

    historyLength.textContent =
        window.history.length;

    currentURL.textContent =
        window.location.href;

}


/* ================= GO BACK ================= */

function goBack() {

    navigationStatus.textContent =
        "Going Back";

    monitorMessage.textContent =
        "history.back() called — navigating to the previous page.";

    statusMessage.textContent =
        "Back navigation requested.";

    window.history.back();

}


/* ================= GO FORWARD ================= */

function goForward() {

    navigationStatus.textContent =
        "Going Forward";

    monitorMessage.textContent =
        "history.forward() called — navigating to the next page.";

    statusMessage.textContent =
        "Forward navigation requested.";

    window.history.forward();

}


/* ================= RELOAD ================= */

function reloadPage() {

    navigationStatus.textContent =
        "Reloading";

    monitorMessage.textContent =
        "location.reload() called — refreshing the current page.";

    statusMessage.textContent =
        "Page reload requested.";

    setTimeout(function() {

        window.location.reload();

    }, 300);

}


/* ================= HISTORY LENGTH ================= */

function showHistoryLength() {

    const length =
        window.history.length;

    navigationStatus.textContent =
        "Information Displayed";

    monitorMessage.textContent =
        "history.length returned " +
        length +
        " history entries.";

    statusMessage.textContent =
        "Current browser history length: " +
        length;

    historyLength.textContent =
        length;

}


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    function() {

        updateHistoryInfo();

        navigationStatus.textContent =
            "Ready";

        monitorMessage.textContent =
            "Browser History Object is ready.";

    }
);


/* ================= POPSTATE ================= */

window.addEventListener(
    "popstate",
    function() {

        updateHistoryInfo();

        navigationStatus.textContent =
            "Navigation Changed";

        monitorMessage.textContent =
            "Browser history navigation detected.";

    }
);