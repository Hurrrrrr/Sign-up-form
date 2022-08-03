"use strict"

const form = document.getElementById("user_form");

// When the user clicks the submit button, if the passwords do not match
// do not allow the form to submit
form.addEventListener("submit", (e) => {
    let checker = false;
    checker = passCompare();
    if (!checker) {
        e.preventDefault();
        showWarning();
    }
    if (checker) {
        hideWarning();
    }
})

function passCompare() {
    const pw1 = document.getElementById("user_pw").value;
    const pw2 = document.getElementById("confirm_pw").value;
    if (pw1 != pw2) {
        alert("Passwords do not match");
        return false;
    }
    alert("Success!");
    return true;
}

function showWarning() {
    let warn = document.getElementById("pw_warning");
    warn.textContent = "Passwords do not match!";
}

function hideWarning() {
    let hide = document.getElementById("pw_warning");
    hide.textContent = "";
}