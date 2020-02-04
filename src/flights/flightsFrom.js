import $ from 'jquery';

export const flightsFrom = () => {
    const flightsView = $(`
    <div class="column">
                  <div class="col-12 d-flex justify-content-center zero">
                      <div class="flight">
                          <div class="col-12 d-flex justify-content-center flight-selector-from">
                              <div class="row">
                                  <div class="flight_cards">
                                      <div class="col-12 flight-selector_top">
                                          <div class="flight-selector_top-icon">
                                              <img class="flight-selector_top-icon-from" src="./src/image/images/icons/black-plane.svg" alt="">
                                          </div>
                                          <div class="col-6 d-flex justify-content-center flight-selector_top-header">
                                              <h1>Berlin</h1>
                                              <img src="https://image.flaticon.com/icons/svg/109/109617.svg" width="224" height="224" alt="Left Arrow free icon" title="Left Arrow free icon">
                                              <h1>Wrocław</h1>
                                          </div>
                                      </div>
                                      <div class="col-12 flight-selector_middle">
                                          <a href="#" onclick="plusDivs(+1)" class="control_next">>></a>
                                          <a href="#" onclick="plusDivs(-1)" class="control_prev"><<</a>
                                          <div class="flight-selector_middle-content">
                                              <div class="flight-selector_middle-list">
                                                  <ul>
                                                      <li>
                                                          <span>Pon, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>WT, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>ŚRd, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>czw, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>pt, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>sob, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>ndz, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>Pon, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>wt, 1 MAR</span>
                                                      </li>
                                                      <li>
                                                          <span>śrd, 1 MAR</span>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12 flight-selector_bottom">
                                          <div class="flight-selector_bottom-time">
                                              <span>13:20</span>
                                          </div>
                                          <div class="flight-selector_bottom-icons">
                                              <img class="flight-selector_bottom-icons-minus" src="./src/image/images/icons/bottom-ticket/minus-symbol.svg" alt="">
                                              <img class="flight-selector_bottom-icons-airplane" src="./src/image/images/icons/bottom-ticket/airliner.svg" alt="">
                                              <img class="flight-selector_bottom-icons-arrow" src="./src/image/images/icons/bottom-ticket/right-arrow.svg" alt="">
                                          </div>
                                          <div class="flight-selector_bottom-time">
                                              <span>14:20</span>
                                     
                                          </div>
                                          <div class="flight-selector_bottom-btn">
                                              <button class="btn btn-primary">Pokaż bilety</button>
                                          </div>
                                      </div>
                                      <div class="col-12 d-flex justify-content-center flight-selector_ticket" id="flight-selector_ticketFrom">
                                          <div class="col-4 flight-selector_ticket-class">
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
                                          <div class="flight-selector_ticket-class">
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
                                              <div class="flight-selector_ticket-class">
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