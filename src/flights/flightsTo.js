import $ from 'jquery';
import image from '../image/images/icons/black-plane.svg'
import imagex from '../image/images/icons/bottom-ticket/minus-symbol.svg'
import imagey from '../image/images/icons/bottom-ticket/airliner.svg'
import imagez from '../image/images/icons/bottom-ticket/right-arrow.svg'
import { directive } from 'lit-html';

export const flightsTo = () => {
    const flightsView = $(`
    <div class="column">
                  <div class="col-12 d-flex justify-content-center zero">
                      <div class="flight">
                          <div class="col-12 d-flex justify-content-center flight-selector-to">
                              <div class="row">
                                  <div class="flight_cards">
                                   
                                      <div class="col-12 flight-selector_top">
                                          <div class="flight-selector_top-icon">
                                              <img class="flight-selector_top-icon-to" src="${image}" alt="">
                                          </div>
                                          <div class="col-6 d-flex justify-content-center flight-selector_top-header">
                                              <h1>Wrocław</h1>
                                              <img src="https://image.flaticon.com/icons/svg/109/109617.svg" width="224" height="224" alt="Right Arrow free icon" title="Right Arrow free icon">
                                              <h1>Berlin</h1>
                                          </div>
                                      </div>
                                      <div class="col-12 flight-selector_middle">
                                            <div><h2>Proszę wybrać datę wylotu</h2></div>
                                            <div class="date-picker" id="date-pickerTo">
                                                <div class="selected-date" id="selected-dateTo"></div>
                                                <div class="dates" id="datesTo">
                                                    <div class="month" id="monthTo">
                                                        <div class="arrows prev-mth" id="prev-mthTo">&lt;</div>
                                                        <div class="mth" id="mthTo"></div>
                                                        <div class="arrows next-mth" id="next-mthTo">&gt;</div>
                                                    </div>
                                                    <div class="days" id="daysTo">
                                                    </div>
                                                </div>
                                            </div>                              
                                      </div>
                                      <div class="col-12 flight-selector_bottom">
                                          <div class="flight-selector_bottom-time">
                                              <span>13:20</span>
                                          </div>
                                          <div class="flight-selector_bottom-icons">
                                              <img class="flight-selector_bottom-icons-minus" src="${imagex}" alt="">
                                              <img class="flight-selector_bottom-icons-airplane" src="${imagey}" alt="">
                                              <img class="flight-selector_bottom-icons-arrow" src="${imagez}" alt="">
                                          </div>
                                          <div class="flight-selector_bottom-time">
                                              <span>14:20</span>
                                     
                                          </div>
                                          <div class="flight-selector_bottom-btn">
                                              <button id="btn_one" class="btn btn-primary">Pokaż bilety</button>
                                          </div>
                                      </div>
                                      <div class="col-12 d-none justify-content-center flight-selector_ticket flight-selector_ticket-class-accept" id="flight-selector_ticketTo">
                                          <div class="flight-selector_ticket-classTo" value="100">
                                              <div class="flight-selector_ticket-class-header flight-selector_ticket-class-header-plus">
                                                  <h2>Plus</h2>
                                              </div>
                                              <div class="flight-selector_ticket-class-list">
                                                  <ul>
                                                      <li>Bezpłatny bagaż podręczny (40 x 30 x 20 cm) w kabinie, umieszczony pod fotelem</li>
                                                      <li>Podręczna walizka na kółkach (55 x 40 x 23 cm) w kabinie</li>
                                                      <li>32-kg bagaż rejestrowany</li>
                                                      <li>Bezpłatny wybór miejsc, w tym miejsc w pierwszym rzędzie oraz miejsc z dodatkową przestrzenią na nog</li>
                                                      <li>Pierwszeństwo wejścia na pokład</li>
                                                      <li>Priority check-in</li>
                                                      <li>Airlines Flex</li>
                                                      <li>Odprawa online do 30 dni przed wylotem</li>
                                                      <li>Bezpłatna odprawa na lotnisku i online</li>
                                                      <li>informacje o locie.</li>
                                                      <li>Zwrot na konto Airlines</li>
                                                      <li>Automatyczna odprawa</li>
                                                  </ul>
                   
                                              </div>
                                              <div class="flight-selector_ticket-class-price flight-selector_ticket-class-header-plus">
                                                  <h2>100 $</h2>
                                              </div>
                                          </div>
                                          <div class="flight-selector_ticket-classTo" value="50">
                                              <div class="flight-selector_ticket-class-header flight-selector_ticket-class-header-go">
                                                  <h2>Go</h2>
                                              </div>
                                              <div class="flight-selector_ticket-class-list">
                                                  <ul>
                                                      <li>Bezpłatny bagaż podręczny (40 x 30 x 20 cm) w kabinie, umieszczony pod fotelem</li>
                                                      <li>Podręczna walizka na kółkach (55 x 40 x 23 cm) w kabinie</li>
                                                      <li>32-kg bagaż rejestrowany</li>
                                                      <li>Bezpłatny wybór miejsc, w tym miejsc w pierwszym rzędzie oraz miejsc z dodatkową przestrzenią na nog</li>
                                                      <li>Pierwszeństwo wejścia na pokład</li>
                                                      <li>Priority check-in</li>
                                                      <li>Airlines Flex</li>
                                                      <li>Odprawa online do 30 dni przed wylotem</li>
                                                      <li>Bezpłatna odprawa na lotnisku i online</li>
                                                  </ul>
                                              </div>
                                              <div class="flight-selector_ticket-class-price flight-selector_ticket-class-header-go">
                                                  <h2>50 $</h2>
                                              </div>
                                          </div>
                                          
                                          <div class="flight-selector_ticket-classTo" value="25">
                                              <div class="flight-selector_ticket-class-header flight-selector_ticket-class-header-basic">
                                                  <h2>Basic</h2>
                                              </div>
                                              <div class="flight-selector_ticket-class-list">
                                                  <ul>
                                                      <li>Bezpłatny bagaż podręczny (40 x 30 x 20 cm) w kabinie, umieszczony pod fotelem</li>
                                                      <li>Podręczna walizka na kółkach (55 x 40 x 23 cm) w kabinie</li>
                                                  </ul>
                                              </div>
                                              <div class="flight-selector_ticket-class-price flight-selector_ticket-class-header-basic">
                                                  <h2>25 $</h2>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
             
          </div>
    `)

    return flightsView;
}





// <div data-cos="elo"></div>


// this.getAttribute("data-cos")  --->   elo
