import displayInfo from '../utils/displayInfo.js';
import displayError from '../utils/displayError.js';
const url = 'https://bsale-backend-lac.vercel.app';

/**
 * It takes a name as an argument, fetches the data from the DB, and then if there is not error
 * will call displaysInfo with the data as an argument, otherwise will call displayError.
 * @param name - the name of the product you want to search for
 */
const getProductsByName = (name) => {
    fetch(`${url}/products?name=${name}`)
    .then(res => res.json())
    .then( data => {
        inputSearch.value = '';
        if(data.error){
            return displayError(data);
        }
        displayInfo(data);
        return;
    });
};

export default getProductsByName;