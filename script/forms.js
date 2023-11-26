function changeLabel(input) {
    let label = document.querySelector(`label[for='${input.id}']`)
    if (label === null) return 
    if (input.value != "" || document.activeElement == input) {
        label.classList.add("form__label-top")
    } else {
        label.classList.remove("form__label-top")
    }
}

export { changeLabel }