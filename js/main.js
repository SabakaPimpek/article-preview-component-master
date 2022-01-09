const clickableButton = document.querySelector(".card_button");
let clickmenu = clickableButton.querySelector(".card_clickmenu")
let overlay = document.querySelector(".overlay");

clickableButton.addEventListener("click", () =>
{
    clickmenu.classList.add("active");
    overlay.classList.add("active");
    closeClickMenu();
}
);

function closeClickMenu()
{
    overlay.addEventListener("click", () =>
    {
        clickmenu.classList.remove("active");
        overlay.classList.remove("active");
    });
}