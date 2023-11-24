import { forbiddenWords } from "./forbiddenWords.js";
class RegisterForm {
    forbiddenWords = forbiddenWords
    constructor(form) {
        this.isValidState = false;

        this.form = form;

        this.userName = this.form.querySelector("#username_input")

        this.genderInputs = this.form.querySelectorAll(".register__form__style__gender input[type='radio")
        this.genderInputValue = this.form.querySelector(".gender_value")

        this.captchaInput = this.form.querySelector("#user-input input")
        this.updateCaptcha = this.form.querySelector(".update__icon")
        this.captcha = this.form.querySelector("#image")
        this.uniquechar = ""

        this.consentProcessingOfPersonalData = this.form.querySelector(".checkbox__inp")

        this.submitBtn = this.form.querySelector(".register__form__button")

        this.getGender()

        this.generateCaptcha()
        let self = this;
        this.updateCaptcha.addEventListener("click", () => {
            this.generateCaptcha()
        })

        this.consentProcessingOfPersonalData.addEventListener("input", () => {
            this.isValid()
        })
        this.userName.addEventListener("input", () => {
            this.isValid()
        })
        this.captchaInput.addEventListener("input", () => {
            this.isValid()
        })

        this.genderInputs.forEach(input => {
            input.addEventListener("input", () => {
                self.getGender()
            })
        })

    }
    generateCaptcha() {
        this.uniquechar = ""
        const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 1; i < 5; i++) {
            this.uniquechar += randomchar.charAt(
                Math.random() * randomchar.length)
        }
        this.captcha.innerHTML = this.uniquechar;
        this.isValid()
    }

    isValid() {
        let inputValueList = this.split(this.userName.value, [" ", "-", "_", "/", "#"]);
        let forbiddenWordsList = this.forbiddenWords.filter(x => inputValueList.includes(x));
        if (!this.consentProcessingOfPersonalData.checked ||
            forbiddenWordsList.length > 0 ||
            this.captchaInput.value != this.uniquechar) {
            this.submitBtn.classList.add("form__button-disabled")
        } else {
            console.log("dis");
            this.submitBtn.classList.remove("form__button-disabled")
        }
    }

    split(str, arr) {
        let answer = []
        let word = ""
        for (let i = 0; i < str.length; i++) {
            if (arr.includes(str[i]) && word != "") {
                answer.push(word)
                word = ""
            } else {
                word += str[i]
            }
        }
        if (word != "") {
            answer.push(word)
        }
        return answer
    }

    getGender() {
        this.genderInputs.forEach(input => {
            if (input.checked) {
                let label = document.querySelector(`label[for='${input.id}']`)
                this.genderInputValue.value = label.textContent
            }
        });
    }
}

let form = document.querySelector(".register__form")


let a = new RegisterForm(form); 