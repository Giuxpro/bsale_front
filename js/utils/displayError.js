const messageError = document.querySelector('#messageError');

/**
 * The function displayError takes a parameter msjError and sets the innerHTML of the element with the
 * id messageError to a div with a class of alert alert-warning role="alert" and a paragraph with a
 * class of center p-0 and the value of the parameter msjError.error, and then sets a timeout of 5000
 * milliseconds to set the innerHTML of the element with the id messageError to an empty string.
 * @param msjError - is the error message that is displayed in the HTML
 */
const displayError = (msjError) => {
    messageError.innerHTML = `
        <div class="alert alert-warning role="alert">
            <p class="center p-0">${msjError.error}</p>
        </div>  
    `;

    setTimeout(() => {
        messageError.innerHTML = '';
    }, 5000);
};

export default displayError;