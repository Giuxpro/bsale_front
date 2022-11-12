
/**
 * It takes two arguments, id and name, and returns a string of HTML that contains a button with the id
 * and name as the value and text.
 * @param id - the id of the category
 * @param name - the name of the category
 * @returns A string of HTML.
 */
const categoriesOptions = (id, name) => {
    const options = `
        
        <option value="${id}" class="row">${name}</option>
    `;
    return options;
};

export default categoriesOptions;