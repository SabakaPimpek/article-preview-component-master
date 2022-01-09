const clickableButton = document.querySelector(".card_button");
const clickmenu = document.querySelector(".card_clickmenu");
const overlay = document.querySelector(".overlay")
let classActive = false;

clickableButton.addEventListener("click", checkClickMenu);
overlay.addEventListener("click", checkClickMenu);

function checkClickMenu()
{
    if(classActive === false) openClickMenu()
    else closeClickMenu();
}

function openClickMenu()
{
    clickmenu.classList.add("active");
    overlay.classList.add("active");
    classActive = !classActive;
}

function closeClickMenu()
{
    clickmenu.classList.remove("active");
    overlay.classList.remove("active");
    classActive = !classActive;
}
