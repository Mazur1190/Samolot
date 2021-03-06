export const datePickerFrom = () => {
    window.dateFrom = 0;
    const date_picker_element = document.getElementById('date-pickerFrom');
    const selected_date_element = document.getElementById('selected-dateFrom');
    const dates_element = document.getElementById('datesFrom')
    const mth_element = document.getElementById('mthFrom')
    const next_mth_element = document.getElementById('next-mthFrom')
    const prev_mth_element = document.getElementById('prev-mthFrom')
    const days_element = document.getElementById('daysFrom')
    const months = ['Styczeń', 'Luty','Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    // Date pickers
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let time = date.getTime()
    let fullDay =  new Date(year + '-' + (month+1) + '-' +(day))
    let selectDate = date;
    let selectDay = day;
    let selectMonth = month;
    let selectYear = year;
    mth_element.textContent = months[month] + ' ' + year;
    selected_date_element.dataset.value = time;
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
        if(!checkEventPathForClass(e.path, 'dates')){
            dates_element.classList.toggle('active');
        }
    }
    // HELPER for 1
    function checkEventPathForClass (path, selector) {
        if (typeof path !== 'undefined') {
            for (let i=0; i<path.length; i++) {
                if (path[i].classList && path[i].classList.contains(selector)){
                    return true
                }
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
    // Start ==== 3 ==== Day quantity in month and marking current one
    // =================
    function populatesDates (e) {
        days_element.innerHTML = '';
        let amount_days = 31;
        if (month%2 == 0){   // if February then 29
            amount_days=30;
        }else if (month === 1){
            amount_days=29;
        }
        for (let i =0; i<amount_days; i++){
            const day_element = document.createElement('div');
            day_element.classList.add('day');
            day_element.textContent = i +1;
            day_element.setAttribute('value', i +1)
            // Mark current day
            if (selectDay == (i+1) && selectYear == year && selectMonth == month){
                day_element.classList.add('selected');
            }
            // Day picker
            day_element.addEventListener('click', function (){
                selectDate = new Date(year + '-' + (month +1) + '-' + (i+1));
                selectDay = (i +1);
                selectMonth = month;
                selectYear = year;
                let toDay = fullDay.getTime()
                if(toDay <= selectDate.getTime()){
                    selected_date_element.textContent = formatDate(selectDate);
                    selected_date_element.dataset.value = selectDate.getTime();
                    populatesDates();
                }
                selected_date_element.dataset.accept = 'true'
            })
            days_element.appendChild(day_element)
        }
    }
    populatesDates();
    // End ==== 3 ====
    // ^^^^^^^^^^^^^^^
    // =================
    // Start ==== 4 ==== Getting day Value
    // =================
    selected_date_element.addEventListener('click', ()=>{
        window.dateFrom = selected_date_element.textContent;
        document.getElementById('dateFrom').innerHTML = window.dateFrom;
    })
  // End ==== 4 ====
}