// NAVIGATION - hamburger and dropdown list
// const navButton = document.querySelector('#nav-button');
// const navBar = document.querySelector('#nav-bar');


// navButton.addEventListener('click', () => {
//     navButton.classList.toggle('show');
//     navBar.classList.toggle('show');
// });

//
// FOOTER INFO - current year & last modified
document.getElementById("currentYear").innerHTML = `&copy;${new Date().getFullYear()} `;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified} `;
