const movingButtons = document.querySelectorAll(".button");

const image = document.querySelectorAll(".image");

const infos = document.querySelectorAll(".infos");

movingButtons.forEach((button, indice) => {
    button.addEventListener("click", () => {

        removeButtonSelected();

        markButtonSelected(button);

        hideActiveImage();

        //console.log(image);
        showBackImage(indice);

        hideActiveInfo();

        showInfos(indice);
    });
});

function markButtonSelected(button) {
    button.classList.add("selected");
}

function showInfos(indice) {
    infos[indice].classList.add("active");
}

function hideActiveInfo() {
    const infosActive = document.querySelector(".infos.active");
    infosActive.classList.remove("active");
}

function showBackImage(indice) {
    image[indice].classList.add("active");
}

function hideActiveImage() {
    const imgActive = document.querySelector(".active");
    imgActive.classList.remove("active");
}

function removeButtonSelected() {
    const buttonSelected = document.querySelector(".selected");
    buttonSelected.classList.remove("selected");
}
