class MySwiper {
    constructor(swiper) {
      this.swiper = swiper
      this.swiper_img = swiper.querySelectorAll(".content_swiper > img")
      this.right = swiper.querySelector(".right")
      this.left = swiper.querySelector(".left")
      this.n = this.swiper_img.length
      this.now = 1
      this.render()
    }
    render() {
      if (this.now == this.n) {
        this.right.classList.remove("right")
        this.right.classList.add("none")
      } else {
        this.right.classList.add("right")
        this.right.classList.remove("none")
      }
      if (this.now == 1) {
        this.left.classList.remove("left")
        this.left.classList.add("none")
      } else {
        this.left.classList.add("left")
        this.left.classList.remove("none")
      }
      let i = 1
      while (i <= this.swiper_img.length) {
        if (this.now == i && this.swiper_img[i - 1].classList.contains("none")) {
          this.swiper_img[i - 1].classList.remove("none")
        }
        else if (this.now != i && !this.swiper_img[i - 1].classList.contains("none")) {
          this.swiper_img[i - 1].classList.add("none")
        }
        i++
      }
    }
    next() {
      this.now++
      this.render()
    }
    previous() {
      console.log("previous");
      this.now--
      this.render()
    }
  }
  
  function new_swiper(swiper_element) {
    let swiper = new MySwiper(swiper_element)
    swiper_element.querySelector(".right_event").addEventListener("click", e => {swiper.next()})
    swiper_element.querySelector(".left_event").addEventListener("click", e => {swiper.previous()})
  }
  new_swiper(document.querySelector(".content_swiper"))