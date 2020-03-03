import $ from 'jquery';

export const datePickerTo = () => {
    
    window.dateTo = 0;
    const date_picker_element = document.getElementById('date-pickerTo');
    const selected_date_element = document.getElementById('selected-dateTo');
    const dates_element = document.getElementById('datesTo')
    
    const mth_element = document.getElementById('mthTo')
    const next_mth_element = document.getElementById('next-mthTo')
    const prev_mth_element = document.getElementById('prev-mthTo')
    
    const days_element = document.getElementById('daysTo')
    
    const months = ['Styczeń', 'Luty','Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    
    

    

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
        if(!checkEventPathForClass(e.path, 'dates')){
    
            dates_element.classList.toggle('active');
        }
    }
    
    
    // HELPER for 1
    function checkEventPathForClass (path, selector) {
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
    
    function goToNextMonth () {
        
        month++;
        if(month >11) {
            month = 0;
            year++;
        }
        mth_element.textContent = months[month] + ' ' + year;
        populatesDates();
    }
    
    function goToPrevMonth () {
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
        }else if (month === 1){
            amount_days=29;
        }
        for (let i =0; i<amount_days; i++){
            const day_element = document.createElement('div');
            day_element.classList.add('day');
            day_element.textContent = i +1;
            day_element.setAttribute('value', i +1)
    
            
            // Zaznaczenie dnia dzisiejszego
            if (selectDay == (i+1) && selectYear == year && selectMonth == month){
                day_element.classList.add('selected');
              
                
            }
            // Wybór dnia
         
            
            day_element.addEventListener('click', function (){
                var d = new Date();
                var n = d.getDay() +1
                // var nodeTwo = document.querySelectorAll('#daysTo div.selected')
                var x = parseInt(this.innerText)
                console.log(n)
                console.log(x)
                if (n <= x) {
                    selectDate = new Date(year + '-' + (month +1) + '-' + (i+1));
                    selectDay = (i +1);
                    selectMonth = month;
                    selectYear = year;
                    selected_date_element.textContent = formatDate(selectDate);
                    selected_date_element.dataset.value = selectDate;
                    populatesDates();
                }else if (n>x){
                    console.log("do tyłu")
                }
              
                })
               
            
            
    
            days_element.appendChild(day_element)
        }
    }
    populatesDates();
    // End ==== 3 ====
    // ^^^^^^^^^^^^^^^

    // selected_date_element.addEventListener('click', ()=>{
    //     console.log(window.dateTo)
    //     document.getElementById('dateStartTo').innerHTML = window.dateTo;
    // })
    // =================
    // Start ==== 4 ==== Uzyskanie wartosci daty
    // =================
    selected_date_element.addEventListener('click', ()=>{
        window.dateTo = selected_date_element.textContent;
        document.getElementById('dateTo').innerHTML = window.dateTo;
    })
  // End ==== 4 ====
    // ^^^^^^^^^^^^^^^
    
  
}