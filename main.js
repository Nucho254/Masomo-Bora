const logIn = document.getElementById("btn-log")
const popUp = document.getElementById("popup")
const closePopUp = document.querySelector(".op-log-pop")

document.addEventListener("click", (event) => {
    if(event.target === logIn)
    {
        popUp.style.display = "flex"
    }
    else if(event.target === closePopUp)
    {
        popUp.style.display = "none"
    }
})
