const popupLinks = document.querySelectorAll("[data-popup-link]");



class Popup {
    constructor(popupLink) {
        this.popupLink = popupLink;
        this.popup = document.querySelector(`#${this.popupLink.getAttribute("data-popup-link")}`)
        this.popupBody = this.popup.querySelector(".popupwrapper__popup")
        this.popupCloseEl = this.popup.querySelector(".popupwrapper__clouse")

        const self = this;
        this.popupLink.addEventListener("click", () => {
            self.popupOpen()
        })

        this.popupCloseEl.addEventListener("click", () => {
            self.popupClose()
        });

        window.addEventListener("resize", () => {
            self.popupScroll()
        })
    }

    popupOpen() {
        this.popup.classList.remove("none")
        this.popupScroll()
    }

    popupClose() {
        this.popup.classList.add("none")
    }

    popupScroll() {
        if (this.popupBody.offsetHeight >= (window.innerHeight * 0.88)) {
            this.popupBody.classList.add("overflow_yscroll")
        } else {
            this.popupBody.classList.remove("overflow_yscroll")
        }
    }

}

popupLinks.forEach(el => {
    new Popup(el)
})
console.log(window.innerHeight);