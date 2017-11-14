import fullPage from './libs/javascript.fullPage.min.js';
import styles from './scss/styles.scss';

fullPage.initialize('#fullpage', {
    anchors: ['Home', 'About', 'Skills', 'Projects', 'ContactMe'],
    css3: true
});