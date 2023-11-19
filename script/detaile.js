//  ---------Табы---------

let tabsBtn = document.querySelectorAll('.main__weight__link');
let tabsItem = document.querySelectorAll('.main__weight__container');



tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;


    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });


    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});
