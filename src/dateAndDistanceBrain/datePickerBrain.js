import $ from 'jquery';

export const datePicker = () => {
    
    const date_picker_element = document.querySelector('.date-picker');
    const selected_date_element = document.querySelector('.date-picker .selected-date');
    const dates_element = document.querySelector('.date-picker .dates')
    
    const mth_element = document.querySelector('.date-picker .dates .month .mth')
    const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth')
    const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth')
    
    const days_element = document.querySelector('.date-picker .dates .days')
    
    const months = ['Styczeń', 'Luty','Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    
    console.log(selected_date_element)
    
    // Date pickers
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    let selectDate = date;
    let selectDay = day;
    let selectMonth = month;
    let selectYear = year;
    
    
    mth_element.textContent = months[month] + ' ' + year;
    selected_date_element.dataset.value = selectDate;
    
    //EVENTS with Functions
    // =================
    // Start ==== 0 ==== Date selector
    // =================
    
    selected_date_element.textContent = formatDate(date);
    
    function formatDate (d) {
        let day = d.getDate();
        if(day <10){
            day ="0" +day
        }
        let month = d.getMonth() +1;  // +1 cause its one behinde month (it is array)
        if(month <10){
            month ="0" +month
        }
        let year = d.getFullYear();
    
        return day + ' / ' + month + ' / ' + year;
    }
    
    // End ==== 0 ====
    // ^^^^^^^^^^^^^^^
    
    // =================
    // Start ==== 1 ==== Calendar toggler (reveal days, years and months)
    // =================
    date_picker_element.addEventListener('click', toggleDatePicker );
    function toggleDatePicker (e) {
        // console.log(e.path)
        if(!checkEventPatchForClass(e.path, 'dates')){
    
            dates_element.classList.toggle('active');
        }
    }
    
    
    // HELPER for 1
    function checkEventPatchForClass (path, selector) {
        for (let i=0; i<path.length; i++) {
            if (path[i].classList && path[i].classList.contains(selector)){
                return true
            }
        }
        return false
    }
    // End ==== 1 ====
    // ^^^^^^^^^^^^^^^
    
    // =================
    // Start ==== 2 ==== Next and Prev button
    // =================
    next_mth_element.addEventListener('click', goToNextMonth)
    prev_mth_element.addEventListener('click', goToPrevMonth)
    
    function goToNextMonth (e) {
        month++;
        if(month >11) {
            month = 0;
            year++;
        }
        mth_element.textContent = months[month] + ' ' + year;
        populatesDates();
    }
    
    function goToPrevMonth (e) {
        month--;
        if(month <0) {
            month = 11;
            year--;
        }
        mth_element.textContent = months[month] + ' ' + year;
        populatesDates();
    }
    
    // End ==== 2 ====
    // ^^^^^^^^^^^^^^^
    
    // =================
    // Start ==== 3 ==== Ustawianie ilości dni w miesiącu oraz zaznaczenie bierzacego
    // =================
    function populatesDates (e) {
        days_element.innerHTML = '';
        let amount_days = 31;
        if (month%2 == 0){   // jezeli miesiac 1 czyli luty to ma 28 dni
            amount_days=30;
        }else if (month = 1){
            amount_days=29;
        }
        for (let i =0; i<amount_days; i++){
            const day_element = document.createElement('div');
            day_element.classList.add('day');
            day_element.textContent = i +1;
    
            // Wybór dnia
            day_element.addEventListener('click', function (){
                selectDate = new Date(year + '-' + (month +1) + '-' + (i+1));
                selectDay = (i +1);
                selectMonth = month;
                selectYear = year;
                selected_date_element.textContent = formatDate(selectDate);
                selected_date_element.dataset.value = selectDate;
                populatesDates();
            })
            // Zaznaczenie dnia dzisiejszego
            if (selectDay == (i+1) && selectYear == year && selectMonth == month){
                day_element.classList.add('selected');
            }
    
            days_element.appendChild(day_element)
        }
    }
    populatesDates();
    // End ==== 3 ====
    // ^^^^^^^^^^^^^^^

    
  
}