/* =====================================================
   CO3 - EXPERIMENT 4
   BROWSER INFORMATION DASHBOARD USING WINDOW OBJECT
===================================================== */


/* ================= UPDATE DASHBOARD ================= */

function updateDashboard() {


    /* ================= NAVIGATOR ================= */

    document.getElementById("language").textContent =
        navigator.language;

    document.getElementById("platform").textContent =
        navigator.platform;

    document.getElementById("cookies").textContent =
        navigator.cookieEnabled ? "Enabled" : "Disabled";

    document.getElementById("browserOnline").textContent =
        navigator.onLine ? "Online" : "Offline";


    /* ================= ONLINE STATUS ================= */

    const online =
        navigator.onLine;

    document.getElementById("onlineStatus").textContent =
        online ? "Online" : "Offline";


    /* ================= SCREEN ================= */

    document.getElementById("screenWidth").textContent =
        screen.width + " px";

    document.getElementById("screenHeight").textContent =
        screen.height + " px";

    document.getElementById("availableWidth").textContent =
        screen.availWidth + " px";

    document.getElementById("availableHeight").textContent =
        screen.availHeight + " px";


    document.getElementById("screenSize").textContent =
        screen.width + " × " + screen.height;


    /* ================= WINDOW ================= */

    document.getElementById("innerWidth").textContent =
        window.innerWidth + " px";

    document.getElementById("innerHeight").textContent =
        window.innerHeight + " px";


    document.getElementById("viewportSize").textContent =
        window.innerWidth +
        " × " +
        window.innerHeight;


    /* ================= SCROLL ================= */

    document.getElementById("scrollX").textContent =
        Math.round(window.scrollX) + " px";

    document.getElementById("scrollY").textContent =
        Math.round(window.scrollY) + " px";


    /* ================= LOCATION ================= */

    document.getElementById("currentURL").textContent =
        window.location.href;

    document.getElementById("protocol").textContent =
        window.location.protocol;

    document.getElementById("hostname").textContent =
        window.location.hostname;


    /* ================= LIVE MONITOR ================= */

    document.getElementById("monitorWidth").textContent =
        window.innerWidth + " px";

    document.getElementById("monitorHeight").textContent =
        window.innerHeight + " px";

    document.getElementById("monitorScrollX").textContent =
        Math.round(window.scrollX) + " px";

    document.getElementById("monitorScrollY").textContent =
        Math.round(window.scrollY) + " px";

}


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    function() {

        updateDashboard();

        document.getElementById(
            "statusMessage"
        ).textContent =
            "Browser information loaded successfully.";

    }
);


/* ================= RESIZE EVENT ================= */

window.addEventListener(
    "resize",
    function() {

        updateDashboard();

        document.getElementById(
            "monitorMessage"
        ).textContent =
            "Resize event detected! Window dimensions updated automatically.";

        document.getElementById(
            "statusMessage"
        ).textContent =
            "Window resized — dashboard updated.";

    }
);


/* ================= SCROLL EVENT ================= */

window.addEventListener(
    "scroll",
    function() {

        updateDashboard();

        document.getElementById(
            "monitorMessage"
        ).textContent =
            "Scroll event detected! Current scroll position updated.";

    }
);


/* ================= ONLINE EVENT ================= */

window.addEventListener(
    "online",
    function() {

        updateDashboard();

        document.getElementById(
            "statusMessage"
        ).textContent =
            "Internet connection restored.";

    }
);


/* ================= OFFLINE EVENT ================= */

window.addEventListener(
    "offline",
    function() {

        updateDashboard();

        document.getElementById(
            "statusMessage"
        ).textContent =
            "Browser is currently offline.";

    }
);