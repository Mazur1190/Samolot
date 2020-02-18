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
 import {sum} from './summary/sum/sum'
// JS aplications
 import {buttonShow} from './common/buttonShow'
 import {buttonSelector} from './common/buttonSelector'
 import {seatSelector} from './common/seatSelector'

 import {datePickerView } from './dateAndDistanceView/datePicker'
 import {datePickerTo } from './datePickers/datePickerTo'
 import {datePickerFrom } from './datePickers/datePickerFrom'
// Trzeba zrobic w HTML diva ktory bedzie oprozniany i podmieniany na kolejne zakladki


//Łapacze
const main = $('main');
const div = $('div');
// const test = $("test")
// const test = $('#btn_one')
const router = new Router();
router.mount(main);


// Trzeba ulozyc logike do przepuszca do poszczegolnych paneli

// div.append(datePickerView);


// main.before(asideBar);
div.append(flightsTo);
div.append(flightsFrom);
datePickerTo();
datePickerFrom();
buttonShow();

// div.append(baggage);
buttonSelector();

// div.append(airplaneSmall);
// seatSelector();


// buttonSelector();
// div.append(summaryAll)
// sum();
// const checker = document.getElementById("sum");
// console.log(checker )
// sum.addEventListener("click", () => {
//     sum.innerHTML = place
//     console.log(place)
// })

















// div.append(airplaneSmall);
// div.append(airplaneLarge);


// div.append(summaryAll);