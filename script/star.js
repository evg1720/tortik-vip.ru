// const ratingItemsList = document.querySelectorAll('.reviews__rating__item');
// const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

// ratingItemsArray.forEach(item =>
//     item.addEventListener('click', () =>
//     item.parentNode.dataset.totalValue = item.dataset.itemValue
//     )
// );

const ratingItemsList = document.querySelectorAll('.reviews__form .reviews__rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
const reviewsRatingInput = document.querySelector(".reviews__form .reviews__rating_input")

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
        reviewsRatingInput.value = itemValue
        //request
    })
);



const reviews = document.querySelectorAll(".reviews__info")
reviews.forEach(el => {
    const starsList = el.querySelector(".reviews__rating_users")
    const starCount = parseInt(starsList.getAttribute("data-star-count").replace(",", "."))
    const stars = starsList.querySelectorAll(".reviews__rating__item_users")
    for (let i = 0; i < starCount; i++) {
        stars[i].classList.add("reviews__rating__item_users-active")
    }
})