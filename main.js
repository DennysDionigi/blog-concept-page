// Un po' di js
console.log('Den');

/*code*/
//#bg
(() => {
    const heading = document.querySelector('.heading'); // Select the element with the class 'heading'
    const body = document.body; // Select the body element

    // Function to set the background position of .heading to '0 0'
    const changeBackgroundPosition = () => heading.style.backgroundPosition = '0 0';

    // Function to reset the background position of .heading to '100% 0'
    const resetBackgroundPosition = () => heading.style.backgroundPosition = '100% 0';

    // Array of events to listen for initiating the change
    const startEvents = ['touchstart', 'mouseenter'];
    startEvents.forEach(event => body.addEventListener(event, changeBackgroundPosition));

    // Listen for the mouse leaving the body to reset the background position
    body.addEventListener('mouseleave', resetBackgroundPosition);
})();

//#checkbox Storage
(() => {
    const checkDarkMode = document.querySelector('#checkdarkmode');
    if(checkDarkMode){
        // Controlla localStorage
    checkDarkMode.checked = localStorage.getItem('darkMode') === 'true' ? true : false;
    // Al check aggiorna localStorage
    checkDarkMode.addEventListener('change', () => {
      localStorage.setItem('darkMode',checkDarkMode.checked ? 'true' : 'false');
    });
    }
  })();
  