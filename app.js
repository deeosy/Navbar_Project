// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
  //  //  manual toggle effect
  // console.log(links.classList.contains('links'))
  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links')
  // }else{
  //   links.classList.add('show-links')

  // }

  links.classList.toggle('show-links')  // auto toggle effect using add toggle class
  //note its important to add height: auto to  the css for the toggle class to work effectively 
})