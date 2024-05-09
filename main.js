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
/*(() => {
    const checkDarkMode = document.querySelector('#checkdarkmode');
    if(checkDarkMode){
        // Controlla localStorage
    checkDarkMode.checked = localStorage.getItem('darkMode') === 'true' ? true : false;
    // Al check aggiorna localStorage
    checkDarkMode.addEventListener('change', () => {
      localStorage.setItem('darkMode',checkDarkMode.checked ? 'true' : 'false');
    });
    }
  })();*/

  //#checkbox migliorato
  (() => {
    const checkDarkMode = document.querySelector('#checkdarkmode');
    if (checkDarkMode) {
      // Check system theme and set initial checkbox state
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const storedSetting = localStorage.getItem('darkMode');
      
      // Determine initial state of checkbox based on localStorage and system preference
      if (storedSetting === null) { // If there is no stored setting
        checkDarkMode.checked = prefersDark;
      } else { // Use stored setting if available
        checkDarkMode.checked = storedSetting === 'true' ? true : false;
      }
      
      // Listen for changes in system preference
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        checkDarkMode.checked = event.matches; // Update checkbox according to new preference
        // Store the new preference
        localStorage.setItem('darkMode', event.matches ? 'true' : 'false');
      });
  
      // Update localStorage when checkbox state changes
      checkDarkMode.addEventListener('change', () => {
        localStorage.setItem('darkMode', checkDarkMode.checked ? 'true' : 'false');
      });
    }
  })();
  
  