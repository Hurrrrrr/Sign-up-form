"use strict"

const form = document.getElementById("user_form");

form.addEventListener("submit", (e) => {
    let checker = false;
    checker = passCompare();
    if (!checker) {
        e.preventDefault();
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