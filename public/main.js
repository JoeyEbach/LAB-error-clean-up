import formEvents from '../components/events/formEvents';
import htmlStructure from '../components/shared/htmlStructure';
import header from '../components/shared/header';
import startSortingBtn from '../components/buttons/sortingBtn';
import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import domEvents from '../components/events/domEvents';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  domEvents();
  formEvents(); // always load last
};

startApp();
