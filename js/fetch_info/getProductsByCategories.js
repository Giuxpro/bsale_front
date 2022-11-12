import displayInfo from '../../js/utils/displayInfo.js';
const url = 'https://bsale-front-giux.vercel.app';

/**
 * It fetches the data from the DB and then send it to displayInfo function
 * to display the info on the page.
 * @param category - the category of the product
 */
const getProductsByCategories = (category) => {
   
    fetch(`${url}/products/${category}`)
    .then(res => res.json())
    .then(data => {
        displayInfo(data);
        return;
    })
};

export default getProductsByCategories;