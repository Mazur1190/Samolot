import $ from 'jquery';

import image from '../../image/images/maldives-ocean-wallpaper-1280x720.jpg'


export const flightsDirection = () => {
    const flightsDirection = $(`
    <div class="column" id="flightDirection">
    <div class="col-12 destination">
        <div class="col-12 d-flex justify-content-center destination_box">
            <div class="row">
                <div class="d-flex destination_box-top">
                    <h2>Cel podróży</h2>
                    <div class="btn-accept btn-zero">
                        <button id="btn_zero" class="btn btn-primary">Lecimy!</button>
                    </div>
                </div>
           
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center destination_box">
            <div class="row">
                <div class="col-12 destination_box-middle">
                    <div class="col-12 d-flex destination_box-middle-box">
                        <div class="col-6 d-flex justify-content-center">
                            <h2>Miejsce wylotu:</h2>
                            <select class="form-control" id="directionTo">
                                 <option > </option>
                                <option >Wroław</option>
                                <option >Berlin</option>
                                <option >Amsterdam</option>
                            </select>
                        </div>
                        <div  class="col-6 d-flex justify-content-center">
                            <h2>Cel podróży:</h2>
                            <select class="form-control" id="directionFrom">
                                <option > </option>
                                <option data-distance="short">Warszawa</option>
                                <option data-distance="short">Berlin</option>
                                <option data-distance="medium">Paryż</option>
                                <option data-distance="medium">Moskwa</option>
                                <option data-distance="long">Hong Kong</option>
                                <option data-distance="long">New York</option>
                            
                            </select>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center destination_box-film">
            <div class="row">
                <div class="col-12">
                    <img src="${image}" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
    `)

    return flightsDirection;
}