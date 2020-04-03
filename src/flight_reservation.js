import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import $ from 'jquery';
//Pages "html&css"
import {login} from './loadingPages/login/login';
import { asideBar } from './loadingPages/aside/aside';
import {flightsDirection} from './loadingPages/flightDirection/flightDirection';
import { flightsTo } from './loadingPages/flights/flightsTo';
import { flightsFrom } from './loadingPages/flights/flightsFrom';
 import {baggage } from './loadingPages/baggage/baggage'
 import { airplaneSmall } from './loadingPages/airplanes/airplaneSmall'
 import { airplaneLarge } from './loadingPages/airplanes/airplaneLarge'
 import {  summaryAll } from './loadingPages/summary/summary'
 // JS aplications "functions"
 import {loginLogics} from './loadingPages/login/login_logic/login_logic'
 import {sum} from './summary/sum/sum'
 import {buttonShow} from './common/buttonShow'
 import {buttonSelector} from './common/buttonSelector'
 import {seatSelector} from './common/seatSelector'
 import {datePickerTo } from './datePickers/datePickerTo'
 import {datePickerFrom } from './datePickers/datePickerFrom'
import {accept} from "./common/acceptButton"

// JS applications logics for pages
import {directionChecker} from './loadingPages/flightDirection/flightDirectionLogics/flightDirectionLogics'
// Global Variables
window.people = 0
window.young = 0
window.child = 0
//Cathers
const main = $('main');
const div = $('div');
//Page Loading
main.before(asideBar);
div.append(login);
div.append(flightsDirection);
div.append(flightsTo);
div.append(flightsFrom);
div.append(baggage);
div.append(airplaneSmall);
div.append(airplaneLarge);
div.append(summaryAll)
// // Functions

loginLogics();
datePickerTo();
datePickerFrom();
buttonShow();
buttonSelector();
seatSelector();
sum();
accept();
directionChecker();


// ###
const menu = document.getElementById('menu')
const menu_btn = document.getElementById('menu-button')

menu_btn.addEventListener("click", () => {
    menu.classList.toggle('show')
})

















// div.append(airplaneSmall);
// div.append(airplaneLarge);


// div.append(summaryAll);