/* =====================================================
   EXPERIMENT 8
   DIGITAL CLOCK AND EXAMINATION COUNTDOWN TIMER
===================================================== */


/* ================= HTML ELEMENTS ================= */

const digitalClock =
    document.getElementById("digitalClock");

const dateDisplay =
    document.getElementById("dateDisplay");

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const countdownMessage =
    document.getElementById("countdownMessage");



/* =====================================================
   DIGITAL CLOCK
===================================================== */

function updateClock() {


    /* CREATE DATE OBJECT */

    const now = new Date();


    /* GET TIME */

    let hours =
        now.getHours();

    let minutes =
        now.getMinutes();

    let seconds =
        now.getSeconds();


    /* AM / PM */

    let period = "AM";


    if (hours >= 12) {

        period = "PM";

    }


    /* CONVERT TO 12-HOUR FORMAT */

    if (hours === 0) {

        hours = 12;

    }

    else if (hours > 12) {

        hours = hours - 12;

    }


    /* ADD ZERO */

    hours =
        String(hours).padStart(2, "0");

    minutes =
        String(minutes).padStart(2, "0");

    seconds =
        String(seconds).padStart(2, "0");


    /* UPDATE DOM */

    digitalClock.textContent =
        hours + ":" +
        minutes + ":" +
        seconds +
        " " +
        period;


    /* ================= DATE ================= */

    const options = {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    };


    dateDisplay.textContent =
        now.toLocaleDateString(
            "en-IN",
            options
        );

}



/* =====================================================
   EXAMINATION COUNTDOWN
===================================================== */


/*
   CHANGE THIS DATE FOR YOUR EXAM
   Format:
   YYYY-MM-DD HH:MM:SS
*/

const examDate =
    new Date("2026-09-15T09:00:00");


function updateCountdown() {


    /* CURRENT DATE */

    const now =
        new Date();


    /* DIFFERENCE */

    const difference =
        examDate.getTime() -
        now.getTime();


    /* CHECK IF EXAM TIME HAS ARRIVED */

    if (difference <= 0) {


        daysElement.textContent =
            "00";

        hoursElement.textContent =
            "00";

        minutesElement.textContent =
            "00";

        secondsElement.textContent =
            "00";


        countdownMessage.textContent =
            "🎓 Examination time has arrived!";


        return;

    }


    /* CALCULATE TIME */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
                (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
                1000
        );


    /* UPDATE DOM */

    daysElement.textContent =
        String(days).padStart(2, "0");


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minutesElement.textContent =
        String(minutes).padStart(2, "0");


    secondsElement.textContent =
        String(seconds).padStart(2, "0");


    countdownMessage.textContent =
        "⏳ Time remaining until examination";

}



/* =====================================================
   RUN FUNCTIONS EVERY SECOND
===================================================== */

updateClock();

updateCountdown();


/*
   setInterval() automatically runs
   the functions every 1000 milliseconds.
*/

setInterval(
    updateClock,
    1000
);


setInterval(
    updateCountdown,
    1000
);