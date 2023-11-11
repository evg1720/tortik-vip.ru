let orderdelivery = document.querySelectorAll(".orderdelivery")

let orderdeliveryList = [document.querySelector("#order_delivery_input1"), document.querySelector("#order_delivery_input2")]

orderdeliveryList.forEach(element => {
    element.addEventListener("input", () => {
        if (orderdeliveryList[0].checked) {
            orderdelivery.forEach(element => {
                element.classList.remove("none")
            })
        } else {
            orderdelivery.forEach(element => {
                element.classList.add("none")
            })
        }
    })
});

document.querySelector("#checkbox").addEventListener("input", () => {
    if (document.querySelector("#checkbox").checked) {
        orderdelivery.forEach(element => {
            element.classList.remove("none")
        })
    } else {
        orderdelivery.forEach(element => {
            element.classList.add("none")
        })
    }
})


function approvalFun() {
    let btn = document.querySelector(".order__form__button")
    if (approval.checked) {
        btn.classList.remove("form__button-disabled")
    } else {
        btn.classList.add("form__button-disabled")
    }
}
let approval = document.querySelector("#checkboxtwo")
approvalFun()

approval.addEventListener("input", approvalFun)