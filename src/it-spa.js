import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import $ from 'jquery';
import { Router } from './router/router';
//HTML and SCSS aplications
import { asideBar } from './aside/aside';
import { flightsTo } from './flights/flightsTo';
import { flightsFrom } from './flights/flightsFrom';

 import {baggage } from './baggage/baggage'

 import { airplaneSmall } from './airplanes/airplaneSmall'
 import { airplaneLarge } from './airplanes/airplaneLarge'

 import {  summaryAll } from './summary/summary'
// JS aplications
 import {buttonShow} from './common/buttonShow'
 import {buttonSelector} from './common/buttonSelector'
 import {seatSelector} from './common/seatSelector'

 import {datePickerView } from './dateAndDistanceView/datePicker'
 import {datePicker } from './dateAndDistanceBrain/datePickerBrain'
// Trzeba zrobic w HTML diva ktory bedzie oprozniany i podmieniany na kolejne zakladki


//Łapacze
const main = $('main');
const div = $('div');
// const test = $("test")
// const test = $('#btn_one')
const router = new Router();
router.mount(main);


// Trzeba ulozyc logike do przepuszca do poszczegolnych paneli

div.append(datePickerView);
datePicker();
// main.before(asideBar);
// div.append(flightsTo);
// div.append(flightsFrom);
// buttonShow();

// div.append(baggage);
// buttonSelector();

// div.append(airplaneSmall);
// seatSelector();


// buttonSelector();

// const checker = document.getElementById("sum");
// console.log(checker )
// sum.addEventListener("click", () => {
//     sum.innerHTML = place
//     console.log(place)
// })

















// div.append(airplaneSmall);
// div.append(airplaneLarge);


// div.append(summaryAll);