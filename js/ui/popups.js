// handles displaying of popups, and navigation from one popup to the other
import { PopUpsData } from '../data/popups.js'

let activePopupMode = "login";
let activeRole = "teacher";

//opening and closing popups functions
function closeAllPopups() {
    document.querySelectorAll(".op-log-pop, .login-popup, .signup-popup").forEach((popup) => {
        popup.classList.remove("show");
    });
}

function openPopup(popup) {
    closeAllPopups();
    popup.classList.add("show");
}

//displaying forms
function displayForms(role, formType) {
    activeRole = role;
    activePopupMode = formType;

    const popup = document.getElementById(formType === "login" ? "Login-form" : "sign-up-form");
    const title = document.getElementById(formType === "login" ? "login-title" : "signup-tittle");
    const text = document.getElementById(formType === "login" ? "login-text" : "signup-text");

    if (!popup || !title || !text) return;

    if (formType === "login") {
        if (role === "teacher") {
            title.textContent = PopUpsData.logInForm.Teacher.title;
            text.textContent = PopUpsData.logInForm.Teacher.text;
        } else {
            title.textContent = PopUpsData.logInForm.student.title;
            text.textContent = PopUpsData.logInForm.student.text;
        }
    } else {
        if (role === "teacher") {
            title.textContent = PopUpsData.signUpForm.Teacher.title;
            text.textContent = PopUpsData.signUpForm.Teacher.text;
        } else {
            title.textContent = PopUpsData.signUpForm.Student.title;
            text.textContent = PopUpsData.signUpForm.Student.text;
        }
    }

    openPopup(popup);
}

// display log in or sign up options
function displayOptions(mode) {
    activePopupMode = mode;

    const popup = document.getElementById("popup");
    const title = document.getElementById("form-title");
    const teacher = document.getElementById("teacher-link");
    const student = document.getElementById("student-link");

    if (!popup || !title || !teacher || !student) return;

    if (mode === "login") {
        title.textContent = PopUpsData.logOptions.LogIn.title;
        teacher.textContent = PopUpsData.logOptions.LogIn.teacher;
        student.textContent = PopUpsData.logOptions.LogIn.Student;
    } else {
        title.textContent = PopUpsData.logOptions.GetStarted.tittle;
        teacher.textContent = PopUpsData.logOptions.GetStarted.teacher;
        student.textContent = PopUpsData.logOptions.GetStarted.student;
    }

    openPopup(popup);
}

function handleChoice(role) {
    displayForms(role, activePopupMode);
}

function switchAuthForm(formType) {
    displayForms(activeRole, formType);
}

// Expose the popup handlers globally so the inline HTML buttons can call them.
globalThis.displayForms = displayForms;
globalThis.displayOptions = displayOptions;
globalThis.handleChoice = handleChoice;
globalThis.switchAuthForm = switchAuthForm;
globalThis.closeAllPopups = closeAllPopups;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".popup-close").forEach((button) => {        //close all popups, once the page has fully loaded
        button.addEventListener("click", closeAllPopups);
    });

    document.querySelectorAll(".op-log-pop, .login-popup, .signup-popup").forEach((popup) => {
        popup.addEventListener("click", (event) => {
            if (event.target === popup) {
                closeAllPopups();
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeAllPopups();
        }
    });
});