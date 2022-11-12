import displayCategories from '../utils/displayCategories.js';
const url = 'https://bsale-front-giux.vercel.app';

/**
 * Fetch the categories from the DB, then sent it to displayCategories function
 * with the data to display the info on the page.
 */
const getCategories = () => {
    fetch(`${url}/categories`)
    .then(res => res.json())
    .then(data => {
        displayCategories(data);
        return;
    });
};

export default getCategories;