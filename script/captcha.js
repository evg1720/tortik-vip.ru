let captcha;
function genrate() {
    // Очистить старый ввод
    document.querySelector("#submit").value = "";
    // Доступ к элементу для сохранения
    // сгенерированная капча
    captcha = document.querySelector("#image");
    let uniquechar = "";
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // Сгенерировать капчу на длину
    // 5 со случайным символом
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    // Сохранить сгенерированный ввод
    captcha.innerHTML = uniquechar;
}
function printmsg() {
    const usr_input = document.querySelector("#submit").value;
    // Проверьте, равен ли ввод
    // генерировать капчу или нет
    if (usr_input == captcha.innerHTML) {
        let s = document.querySelector("#key").innerHTML = "Соответствует";
        genrate();
    }
    else {
        let s = document.querySelector("#key").innerHTML = "не соответствует";
        genrate();
    }
}
// window.onload = function () {
//     genrate()
// }
genrate()