console.log('it works');
const gird = (gridEl) => Array.from(document.getElementsByClassName('colorButton'));
const enableListeners = () => gird().forEach(colorEl => colorEl.addEventListener('click', clickFn));
clickFn = function () {
    console.log('works')
};
enableListeners();