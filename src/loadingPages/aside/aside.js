import $ from 'jquery';
import image from '../../image/images/logo/e76427fc-9a66-4e2c-8d8b-3fa9498b9161_200x200.png'

export const asideBar = () => {
    const aside = $(`
    <div>
    <aside>
            <div class="adise_logo">
                <div class="logo"><img src="${image}"></div>
            </div>
            <div class="aside_card">
                <div class="accordion" id="accordionExample">
                    <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Loty
                        </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <h3>Wybór biletów</h3>
                            <div class="card-body-indicator">
                                <h2 class="mb-0">
                                    0.00$
                                </h2>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Pasażerowie i Bagaż
                        </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        <h3>Ilość biletów</h3>
                            <div class="card-body-indicator">
                                <h2 class="mb-0">
                                    0
                                </h2>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Miejsca
                        </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                        <h3>Wybór miejsca</h3>
                            <div class="card-body-indicator">
                                <h2 class="mb-0">
                                    0
                                </h2>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFive">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Podsumowanie
                            </button>
                        </h2>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div class="card-body">
                            <h3>Do zapłaty</h3>
                            <div class="card-body-indicator">
                                <h2 class="mb-0">
                                    0.00$
                                </h2>
                            </div>
                        </div>
               
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        </div>
        `);
    
  
    return aside;
  };