import categoriesOptions from '../components/categoriesOptions.js';
const categoriesContainer = document.querySelector('#categories');

/**
 * For each category in the categories array, create a new option element with the category's id and
 * name, and append it to the categoriesContainer element.
 * @param categories - an array of objects
 */
const displayCategories = (categories) => {

    for(let i = 0; i < categories.length; i++) {
        const id = categories[i].id;
        const name = categories[i].name;
        categoriesContainer.innerHTML += categoriesOptions(id, name);
    };
};

export default displayCategories;