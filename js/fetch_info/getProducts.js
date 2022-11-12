import displayInfo from '../utils/displayInfo.js';
const url = 'https://bsale-front-giux.vercel.app';

/**
 * It fetches the data from the DB, then send the data to displayInfo function
 *   to display it on the page.
 */
const getProducts = () => {
    fetch(`${url}/products`)
    .then(res => res.json())
    .then(data => {
        displayInfo(data);
        return;
    });
};

export default getProducts;