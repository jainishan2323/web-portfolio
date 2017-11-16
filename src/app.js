import fullPage from './libs/javascript.fullPage.min.js';
import styles from './scss/styles.scss';
import canvasDots from './js/canvas.js';

fullPage.initialize('#fullpage', {
    anchors: ['Home', 'About', 'Projects', 'Clients', 'Milestones', 'ContactMe'],
    css3: true,
    easingcss3: 'ease'
});

window.onload = function() {
    canvasDots();
};