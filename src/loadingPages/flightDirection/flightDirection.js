import $ from 'jquery';
import {directionChecker} from './/flightDirectionLogics/flightDirectionLogics'
import image from '../../image/images/maldives-ocean-wallpaper-1280x720.jpg'



export const flightsDirection = () => {
    const flightsDirection = $(`
    <div class="column" id="flightDirection">
    <div class="col-12 destination">
        <div class="col-12 d-flex justify-content-center destination_box">
            <div class="row">
                <div class="d-flex destination_box-top w-100">
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
                    <div class="col-12 row destination_box-middle-box">
                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <h2>Miejsce wylotu:</h2>
                            <select class="form-control" id="directionTo">
                                 <option></option>
                                <option data-distance="short" value="Wrocław">Wrocław</option>
                                <option data-distance="medium" value="Berlin">Berlin</option>
                                <option data-distance="long" value="Amsterdam">Amsterdam</option>
                            </select>
                        </div>
                        <div  class="col-12 col-md-6 d-flex justify-content-center">
                            <h2>Cel podróży:</h2>
                            <select class="form-control" id="directionFrom">
                                
                              <!--  <option data-distance="short">Warszawa</option>
                                <option >Berlin</option>
                                <option >Paryż</option>
                                <option >Moskwa</option>
                                <option >Hong Kong</option>
                                <option >New York</option>
                            -->
                            </select>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center destination_box-film">
            <div class="row">
                <div class="col-12">
                    <img class="img-fluid" src="${image}" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
    `)
    return flightsDirection;
}
