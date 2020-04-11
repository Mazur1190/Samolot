import $ from 'jquery';
import image from '../../image/images/icons/black-plane.svg'
import imagex from '../../image/images/icons/bottom-ticket/minus-symbol.svg'
import imagey from '../../image/images/icons/bottom-ticket/airliner.svg'
import imagez from '../../image/images/icons/bottom-ticket/right-arrow.svg'

export const flightsFrom = () => {
    const flightsView = $(`
    <div class="column" id="flight_from">
                  <div class="col-12 d-flex justify-content-center zero">
                      <div class="flight">
                          <div class="col-12 d-flex justify-content-center flight-selector-from">
                              <div class="row">
                                  <div class="flight_cards">
                                      <div class="col-12 flight-selector_top">
                                          <div class="flight-selector_top-icon">
                                              <img class="flight-selector_top-icon-from" src="${image}" alt="">
                                          </div>
                                          <div class="col-12 col-md-6 d-flex justify-content-center flight-selector_top-header">
                                              <h1>Berlin</h1>
                                              <img src="https://image.flaticon.com/icons/svg/109/109617.svg" width="224" height="224" alt="Left Arrow free icon" title="Left Arrow free icon">
                                              <h1>Wrocław</h1>
                                          </div>
                                      </div>
                                      <div class="col-12 flight-selector_middle">
                                      <div><h2>Proszę wybrać datę wylotu</h2></div>
                                      <div class="date-picker" id="date-pickerFrom">
                                          <div class="selected-date" id="selected-dateFrom" data-accept='false'></div>
                                          <div class="dates" id="datesFrom">
                                              <div class="month" id="monthFrom">
                                                  <div class="arrows prev-mth" id="prev-mthFrom">&lt;</div>
                                                  <div class="mth" id="mthFrom"></div>
                                                  <div class="arrows next-mth" id="next-mthFrom">&gt;</div>
                                              </div>
                                              <div class="days" id="daysFrom">
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
                                              <button id="btn_two" class="btn btn-primary">Pokaż bilety</button>
                                          </div>
                                      </div>
                                      <div class="col-12 d-none justify-content-center flight-selector_ticket" id="flight-selector_ticketFrom">
                                          <div class="flight-selector_ticket-classFrom" value="100">
                                              <div class="flight-selector_ticket-class-header flight-selector_ticket-class-header-plus">
                                                  <h2>Plus</h2>
                                              </div>
                                              <div class="flight-selector_ticket-class-list" 
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
                                          <div class="flight-selector_ticket-classFrom" value="50">
                                              <div class="flight-selector_ticket-class-header flight-selector_ticket-class-header-go">
                                                  <h2>Go</h2>
                                              </div>
                                              <div class="flight-selector_ticket-class-list" >
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
                                              <div class="flight-selector_ticket-classFrom" value="25">
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
                                      
                                    <div class="col-12 flight-selector_bottom" id="acceptTickets">
                                        <div class="">
                                            <button id="btn_three" class="btn btn-primary">Akceptuj</button>
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