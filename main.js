//user onboarding popups

// Teacher or student option pop up
const logIn = document.getElementById("btn-log")
const popUp = document.getElementById("popup")
const closePopUp = document.querySelector(".op-log-pop")
const getStarted = document.getElementById("btn-start")
const popUpTitle = document.getElementById('popup-title')
const teacherLink = document.getElementById('teacher-link')
const studentLink = document.getElementById('student-link')


document.addEventListener("click", (event) => {
    if (event.target === logIn)
    {
        popUp.style.display = "flex"
        popUpTitle.textContent = "Choose Your Account"
        teacherLink.textContent = "Log in as teacher"
        studentLink.textContent = "Log in as student"
    }
    else if(event.target === getStarted)
    {
        popUp.style.display = "flex"
        popUpTitle.textContent = "Who Are You"
        teacherLink.textContent = "A Teacher"
        studentLink.textContent = "A Student"
    }
    else if(event.target === closePopUp)
    {
        popUp.style.display = "none"
    }
})

// Log in or Sign up popup

const heroTeachBtn = document.getElementById("hero-teach-btn")
const heroStudBtn = document.getElementById("hero-stud-btn")
const ctaTeachBtn = document.getElementById("cta-teach-btn")
const ctaStudBtn = document.getElementById("cta-stud-btn")
const logInForm = document.getElementById("Login-form")
const signUpForm = document.getElementById("sign-up-form")
const signTitle = document.getElementById("signup-tittle")
const signText = document.getElementById("signup-text")
const logTitle = document.getElementById("login-title")
const logText = document.getElementById("teacher-login-text")

document.addEventListener("click", (event) => {
    if(event.target === heroTeachBtn)
    {
        logInForm.style.display = "flex"
        logTitle.textContent = "Class Awaits!"
        logText.textContent = "Log in to see your classes"
    }

    if(event.target === heroStudBtn)
    {
        logInForm.style.display = "flex"
        logTitle.textContent = "Start Revising Now"
        logText.textContent = "Log in to see your revision questions"
    }

    if(event.target === ctaTeachBtn)
    {
        signUpForm.style.display = "flex"
        signTitle.textContent = "Make Revision Easy"
        signText.textContent = "Sign up, to save time on your revision"
    }

    if(event.target === ctaStudBtn)
    {
        signUpForm.style.display = "flex"
        signTitle.textContent = "Revision made easy"
        signText.textContent = "Sign up, to access revision questions"
    }
})
