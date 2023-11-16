class Zoom {
    constructor(img, popup) {
        this.img = img;
        this.popup = popup;
        this.popupImage = this.popup.querySelector("img");
        this.popupClose = this.popup.querySelector(".popupwrapper__clouse")
        this.imgUrl = this.img.style.backgroundImage.replace('url("', '').replace('")', '')

        const self = this;
        this.img.addEventListener("click", () => {
            self.openPopup();
        })

        this.popupClose.addEventListener("click", () => {
            self.closePopup();
        })
    }

    openPopup() {
        this.popup.classList.remove("none");
        this.popupImage.src = this.imgUrl;
    }

    closePopup() {
        this.popup.classList.add("none");
    }
}

const imgs = document.querySelectorAll("[data-zoom]");
const popup = document.querySelector("#zoompopup");

imgs.forEach(el => {
    new Zoom(el, popup);
})