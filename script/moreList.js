class MoreList {
    constructor(list, n, clouse_item) {
        this.list = document.querySelectorAll(`${list} > li`)
        this.list[n - 1].classList.add("list__more")
        this.on = document.querySelector(`${list} > .list__more`)

        this.create_close(list, clouse_item)
        this.clouse_item(n)

        this.on.addEventListener("click", () => {
            this.on.classList.add("onclick")
            let i = 1
            this.list.forEach(element => {
                if (i > n) {
                    element.classList.remove("none")
                }
                i++
            });
        })

        this.clouse.addEventListener("click", () => {
            this.on.classList.remove("onclick")
            let i = 1
            this.list.forEach(element => {
                if (i > n) {
                    element.classList.add("none")
                }
                i++
            });
        })
    }

    create_close(list, clouse_item) {
        let div = document.createElement("li")
        div.className = "test list__close"
        div.innerHTML = clouse_item
        document.querySelector(list).append(div)
        this.list = document.querySelectorAll(`${list} > li`)
        this.clouse = document.querySelector(`${list} > .list__close`)
    }

    clouse_item(n) {
        let i = 1
        this.list.forEach(element => {
            if (i > n) {
                element.classList.add("none")
            }
            i++
        });
    }
}
export { MoreList }