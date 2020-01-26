import $ from 'jquery';
import suitcase_small from '../image/images/icons/suitcase_small.svg'
import suitcase_medium from '../image/images/icons/suitcase_medium.svg'
import suitcase_large from '../image/images/icons/suitcase_large.svg'



export const baggage = () => {
    const baggageView = $(`
    <div class="column">
    <div class="col-12 baggage">
        <div class=" d-flex justify-content-center baggage_box">
            <div class="row">
                <div class="baggage_box-top">
                    <h2>Pasażerowie i bagaż</h2>
                </div>
     
            </div>
        </div>
        <div class=" d-flex justify-content-center baggage_box">
            <div class="row">
                <div class="col-12 baggage_box-middle">
                    <div class="col-12 d-flex baggage_box-middle-box">
                        <div class="col-4 d-flex">
                            <h2>Ilość osób:</h2>
                            <select class="form-control" name="number-of-passangers" id="adults_baggage_box">
                                <option >1</option>
                                <option >2</option>
                                <option >3</option>
                                <option >4</option>
                                <option >5</option>
                                <option >6</option>
                                <option >7</option>
                                <option >8</option>
                                <option >9</option>
                            </select>
                        </div>
                        <div  class="col-4 d-flex">
                            <h2>Ilość dzieci:</h2>
                            <select class="form-control" name="groupOfPassengers" id="young_baggage_box">
                                <option >0</option>
                                <option >1</option>
                                <option >2</option>
                                <option >3</option>
                                <option >4</option>
                                <option >5</option>
                                <option >6</option>
                                <option >7</option>
                                <option >8</option>
                                <option >9</option>
                            </select>
                        </div>
                        <div  class="col-4 d-flex">
                            <h2>Niemowlęta:</h2>
                            <select class="form-control" name="groupOfPassengers" id="child_baggage_box">
                                <option >0</option>
                                <option >1</option>
                                <option >2</option>
                                <option >3</option>
                                <option >4</option>
                                <option >5</option>
                                <option >6</option>
                                <option >7</option>
                                <option >8</option>
                                
                            </select>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center baggage_box">
            <div class="row">
                <div class="col-12 d-fex  baggage_box-bot">
                    <div class="col-3 baggage_box-bot-options" id="suitcase_small">
                        <img src="${suitcase_small}" alt="">
                        <h4>10 kg</h4>
                        <span>10 $</span>
                    </div>
                    <div class="col-3  baggage_box-bot-options" id="suitcase_medium"> 
                        <img src="${suitcase_medium}" alt="">
                        <h4>20 kg</h4>
                        <span>20 $</span>
                    </div>
                    <div class=" col-3 baggage_box-bot-options" id="suitcase_large">
                        <img src="${suitcase_large}" alt="">
                        <h4>32 kg</h4>
                        <span>30 $</span>
                    </div>
                    <div class=" baggage_box-bot-button">
                        <button class="btn btn-primary">Akceptuj</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>
    `)

    return baggageView;
}