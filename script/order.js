let orderdelivery = document.querySelectorAll(".orderdelivery")

let orderdeliveryList = [document.querySelector("#order_delivery_input1"), document.querySelector("#order_delivery_input2")]

orderdeliveryList.forEach(element => {
    element.addEventListener("input", hideInputs)
});
// console.log(document.querySelector("#checkbox"))
// document.querySelector("#checkbox").addEventListener("input", () => {
//     if (document.querySelector("#checkbox").checked) {
//         orderdelivery.forEach(element => {
//             element.classList.remove("none")
//         })
//     } else {
//         orderdelivery.forEach(element => {
//             element.classList.add("none")
//         })
//     }
// })
function hideInputs() {
    console.log(orderdeliveryList)
    if (orderdeliveryList[0].checked) {
        orderdelivery.forEach(element => {
            element.classList.remove("none")
        })   
    } else {
        console.log("#checkbox")
        orderdelivery.forEach(element => {
            element.classList.add("none")
        })
    }
}
hideInputs()