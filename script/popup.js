const popupLinks = document.querySelectorAll("[data-popup-link]");



class Popup {
    constructor(popupLink) {
        this.popupLink = popupLink;
        this.popup = document.querySelector(`#${this.popupLink.getAttribute("data-popup-link")}`)
        this.popupCloseEl = this.popup.querySelector(".popupwrapper__clouse")

        const self = this;
        this.popupLink.addEventListener("click", () => {
            self.popupOpen()
        })

        this.popupCloseEl.addEventListener("click", () => {
            self.popupClose()
        });
    }

    popupOpen() {
        this.popup.classList.remove("none")
    }

    popupClose() {
        this.popup.classList.add("none")
    }
}

popupLinks.forEach(el => {
    new Popup(el)
})