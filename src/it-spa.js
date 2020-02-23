import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import $ from 'jquery';
import { Router } from './router/router';
//Pages "html&css"
import { asideBar } from './loadingPages/aside/aside';
import { flightsTo } from './loadingPages/flights/flightsTo';
import { flightsFrom } from './loadingPages/flights/flightsFrom';
 import {baggage } from './loadingPages/baggage/baggage'
 import { airplaneSmall } from './loadingPages/airplanes/airplaneSmall'
 import { airplaneLarge } from './loadingPages/airplanes/airplaneLarge'
 import {  summaryAll } from './loadingPages/summary/summary'

 // JS aplications "functions"
 import {sum} from './summary/sum/sum'
 import {buttonShow} from './common/buttonShow'
 import {buttonSelector} from './common/buttonSelector'
 import {seatSelector} from './common/seatSelector'
 import {datePickerTo } from './datePickers/datePickerTo'
 import {datePickerFrom } from './datePickers/datePickerFrom'
import {accept} from "./common/acceptButton"
// Variables
window.people = 0
window.young = 0
window.child = 0


//Łapacze
const main = $('main');
const div = $('div');
// const test = $("test")
// const test = $('#btn_one')
// const router = new Router();
// router.mount(main);


//Wgrywanie stron
// main.before(asideBar);
div.append(flightsTo);
div.append(flightsFrom);


div.append(baggage);


div.append(airplaneSmall);
// div.append(airplaneLarge);
div.append(summaryAll)


// Funkcje
datePickerTo();
datePickerFrom();
buttonShow();
buttonSelector();
seatSelector();
sum();


// CHECKER
// const checker = document.getElementById("buy");
// console.log(checker )
// checker.addEventListener("click", () => {
//     sum.innerHTML = window.place
//     console.log(place)
// })

















// div.append(airplaneSmall);
// div.append(airplaneLarge);


// div.append(summaryAll);