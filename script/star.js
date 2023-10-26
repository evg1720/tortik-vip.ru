// const ratingItemsList = document.querySelectorAll('.reviews__rating__item');
// const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

// ratingItemsArray.forEach(item =>
//     item.addEventListener('click', () =>
//     item.parentNode.dataset.totalValue = item.dataset.itemValue
//     )
// );

const ratingItemsList = document.querySelectorAll('.reviews__rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;

        //request
    })
);