import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import $ from 'jquery';
import { Router } from './router/router';
//import { nav } from './navigation/nav';
import { asideBar } from './aside/aside';
import { flightsTo } from './flights/flightsTo';
// import {flightsToTickets} from './flights/flightsToTickets'
import { flightsFrom } from './flights/flightsFrom';
 import {baggage } from './baggage/baggage'
 import { airplaneSmall } from './airplanes/airplaneSmall'
 import { airplaneLarge } from './airplanes/airplaneLarge'
 import {  summaryAll } from './summary/summary'
 import {buttonShow} from './common/buttonShow'
// Trzeba zrobic w HTML diva ktory bedzie oprozniany i podmieniany na kolejne zakladki


//Łapacze
const main = $('main');
const div = $('div');
// const test = $("test")
// const test = $('#btn_one')
const router = new Router();
router.mount(main);




main.before(asideBar);
// div.append(flightsTo);
// div.append(flightsFrom);
// buttonShow();

// div.append(baggage);
div.append(airplaneSmall);
// div.append(airplaneLarge);
// div.append(summaryAll);