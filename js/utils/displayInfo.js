import card from '../components/card.js';
const productsContainer = document.querySelector('#productsContainer');

/**
 * It takes in an array of objects, loops through the array, and then creates a card for each object in
 * the array.
 * @param data - the array of objects that is returned from the fetch request
 * @returns the value of the last expression.
 */
const displayInfo = (data) => {
    productsContainer.innerHTML = '';
    for(let i = 0; i < data.length; i++) {
        const image = data[i].url_image;
        const name = data[i].name.toUpperCase();
        const price = data[i].price;
        productsContainer.innerHTML += card(image, name, price);
    }
    return;
};

export default displayInfo;