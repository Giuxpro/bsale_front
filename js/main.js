import getProductsByCategories from './fetch_info/getProductsByCategories.js';
import getCategories from './fetch_info/getCategories.js';
import getProducts from './fetch_info/getProducts.js';
import displayError from './utils/displayError.js';
import getProductsByName from './fetch_info/getProductsByName.js';

const inputSearch = document.querySelector('#inputSearch');
const btnSubmit = document.querySelector('#btnSubmit');
const categories = document.querySelector('#categories');

window.addEventListener('DOMContentLoaded', appInit);

/**
 * The appInit function is called when the page loads, and it calls the getCategories and getProducts
 * functions.
 * @returns Nothing.
 */
function appInit() {
    getCategories();
    getProducts();
    return;
};

let searchForProduct = '';

/* Listening for a click event on the categories element. If the value of the target is 0 it will call
the getProducts function, otherwise it will call the getProductsByCategories function. */
categories.addEventListener('click', (e) => {
    if(e.target.value == 0){
        getProducts();
        return;
    }
    getProductsByCategories(e.target.value);
});


/* Listening for an input event on the inputSearch element to asign
* the value to searchForProduct. 
*/
inputSearch.addEventListener('input', (e) => {
    e.preventDefault();
    searchForProduct = e.target.value;
});

/* An event listener that is listening for a click event on the button. 
*  if searchForProduct is empty will return an error,
*  otherwise it will call getProductsByName function 
*/
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if(searchForProduct === '' || inputSearch.value === ''){
        return displayError({error:'Por favor ingresa un producto'});
    };
    getProductsByName(searchForProduct);
});

