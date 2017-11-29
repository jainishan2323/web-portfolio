import fullPage from './libs/javascript.fullPage.min.js';
import styles from './scss/styles.scss';
import canvasDots from './js/canvas.js';

fullPage.initialize('#fullpage', {
    anchors: ['Home', 'About', 'Projects', 'Clients', 'ContactMe', 'Milestones'],
    css3: true,
    easingcss3: 'ease'
});

// window.openModal = function() {
//     const modal = document.getElementById('modal-container');    
//     modal.removeAttribute("class");
//     modal.classList.add('one');
//     document.body.classList.add('modal-active');
// }

// window.closeModal = function() {
//     const modal = document.getElementById('modal-container');
//     modal.classList.add('out');
//     document.body.classList.remove('modal-active');
// }

// window.addEventListener("hashchange", onHashUpdate, false);

// function onHashUpdate(e) {
//     const hashLocation = e.target.location.hash.replace('#', '').toLowerCase();
//     const domeNode = document.getElementById(hashLocation);
//     domeNode.style.visibility = "visible";
// }

window.onload = function() {
    canvasDots();
};