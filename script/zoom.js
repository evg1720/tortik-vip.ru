import { newSwiper } from "./mySwiper.js"

let zoom_swiper = newSwiper(document.querySelector(".swiper"))

const slides = document.querySelectorAll(".gallery-top .swiper-slide")

slides.forEach(el => {
    el.addEventListener("click", () => {
        let i = 1
        let status = true
        slides.forEach(element => {
            if (element.classList.contains("swiper-slide-active")) status = false
            if (status) i++
        })
        zoom_swiper.now = i
        zoom_swiper.render()

    })
})