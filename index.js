const openPopup = () => {
    const modal = document.getElementById("popup");
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
}

const closePopup = () => {
    const modal = document.getElementById("popup");
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
}

const id = setTimeout(() => {openPopup()},3000);
const clearTime = () => {
    clearTimeout(id);
}

const button = document.getElementById("btn");
button.addEventListener("click", clearTime);


const buttonClose = document.getElementById("btn-close");
buttonClose.addEventListener( "click", closePopup);