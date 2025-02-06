import CircleTime from './modules/circle-time.js';
import DropDown from './modules/dropdown-menu.js';
import Togglemenu from './modules/toggle-menu.js';
import burger from './modules/burger.js';
import VacCard from './modules/vac-card.js';
import AboutUs from './modules/about-us.js';
import VentCard from './modules/vent-card.js';
import HrefCard from './modules/href-card.js';



const init = () => {
    CircleTime()
    DropDown()
    Togglemenu()
    burger()
    VacCard()
    AboutUs()
    VentCard()
    HrefCard()
}   

init()