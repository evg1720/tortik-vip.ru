// import { changeLabel } from ".//script/forms.js";

// function noDigits(event) {
//     let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
//     let valid = re.test(event.target.value);

//     let btn = document.querySelector("#login__btn")
//     if (valid) {
//         btn.disabled = false
//     } else {
//         btn.disabled = true
//     }
//     // if ("/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im".indexOf(event.key) != -1)
//     //   event.preventDefault();
//   }
//   document.querySelector("#login__tel").addEventListener("input", noDigits)

// --- Появление попапа (модальное окно)

// let inputs;

// function start() {
//     inputs = document.querySelectorAll(".formInput")
//     inputs.forEach(input => {
//         changeLabel(input)
//         input.addEventListener("focus", (e) =>  {
//             changeLabel(e.target)
//         })
//         input.addEventListener("blur", (e) => {
//             changeLabel(e.target)
//         })
//     })
// }

// -----**** login


// document.querySelector("#login").addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(".popupwrapper").classList.remove("none")
//     start()
// })



// document.querySelector(".login__form__close").addEventListener("click", () => {
//     document.querySelector(".popupwrapper").classList.add("none")
// })

// document.querySelector("#registration").addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector("#register").classList.remove("none")
// })



// document.querySelector(".register__form__close").addEventListener("click", () => {
//     document.querySelector("#register").classList.add("none")
// })
