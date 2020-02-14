import $ from 'jquery';

export const datePickerView = () => {
    const dataSelector = $(`
    <div class="date-picker">
    <div class="selected-date"></div>
    <div class="dates">
        <div class="month">
            <div class="arrows prev-mth">&lt;</div>
            <div class="mth"></div>
            <div class="arrows next-mth">&gt;</div>
        </div>
        <div class="days">
        </div>
    </div>
  </div>
    `)
 
    return dataSelector;


}