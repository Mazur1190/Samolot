import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import $ from 'jquery';
import { Router } from './router/router';
//import { nav } from './navigation/nav';
import { asideBar } from './aside/aside';
import { flightsTo } from './flights/flightsTo';
import { flightsFrom } from './flights/flightsFrom';
 import {baggage } from './baggage/baggage'
 import { airplaneSmall } from './airplanes/airplaneSmall'
 import { airplaneLarge } from './airplanes/airplaneLarge'
 import {  summaryAll } from './summary/summary'


// Trzeba zrobic w HTML diva ktory bedzie oprozniany i podmieniany na kolejne zakladki

const main = $('main');
const div = $('div');
const router = new Router();

router.mount(main);
//router.init();

//nawigacja  - jest wstawiana przed main bo main bedzie dynamicznie zmieniany
// console.log(baggage)



main.before(asideBar);
// div.append(flightsTo);
// div.append(flightsFrom);
div.append(baggage);
// div.append(airplaneSmall);
// div.append(airplaneLarge);
// div.append(summaryAll);