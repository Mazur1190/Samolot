import $ from 'jquery';

export const summaryAll = () => {
    const summary = $(`
    <div class="column">
    <div class="col-12 summary">
        <div class=" d-flex justify-content-center summary_box">
            <div class="row">
                <div class="summary_box-top">
                    <h2>Podsumowanie</h2>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center summary_box">
            <div class="row">
                <div class="col-12 summary_box-one">
                    <div class="col-3 d-flex">
                        <div class="col-4 d-flex">
                            <h2>Loty:</h2>
                        </div>
                    </div>
                    <div class="col-4 d-flex summary_box-one-box">
                        <div class="col-4 d-flex">
                            <h2>Start</h2>
                        </div>
                        <div class="col-4 d-flex">
                            <img src="https://image.flaticon.com/icons/svg/109/109617.svg" width="224" height="224" alt="Right Arrow free icon" title="Right Arrow free icon">
                        </div>
                        <div class="col-4 d-flex">
                            <h2>Stop</h2>
                        </div>
                    </div>
                    <div class="col-4 d-flex summary_box-one-box">
                        <div class="col-4 d-flex">
                            <h2>Start</h2>
                        </div>
                        <div class="col-4 d-flex">
                            <img src="https://image.flaticon.com/icons/svg/109/109617.svg" width="224" height="224" alt="Right Arrow free icon" title="Right Arrow free icon">
                        </div>
                        <div class="col-4 d-flex">
                            <h2>Stop</h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class=" d-flex justify-content-center summary_box">
            <div class="row">
                <div class="col-12 summary_box-two">
                    <div class="col-8 d-flex summary_box-twobox">
                        <div class="col-4 d-flex">
                            <h2>Pasażerowie:</h2>
                        </div>
                        <div class="col-4 d-flex">
                            <h2>4</h2>
                        </div>
                        <div class="col-4 d-flex">
                            <h2>Bagaż:</h2>
                        </div>
                        <div class="col-4 d-flex">
                            <h2>32 kg</h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class=" d-flex justify-content-center summary_box">
            <div class="row">
                <div class="col-12 summary_box-three">
                    <div class="col-12 d-flex summary_box-three-box">
                        <div class="col-4 d-flex">
                            <h2>Miejsca:</h2>
                        </div>
                        <div class="col-4 d-flex">
                            <span>A30</span>
                            <span>A30</span>
                            <span>A30</span>
                            <span>A30</span>
                            <span>A30</span>
                            <span>A30</span>
                            <span>A30</span>
                            <span>A30</span>
                            <span>A30</span>
                        </div>
                     
                    </div>
                </div>
                
            </div>
        </div>
        <div class=" d-flex justify-content-center summary_box">
            <div class="row">
                <div class="col-12 summary_box-four">
                    <div class="col-12 d-flex summary_box-four-box">
                        <div class="col-6 d-flex">
                            <h2>Suma zamówienia:</h2>
                        </div>
                        <div class="col-6 d-flex">
                            <h2>1000$</h2>
                        </div>
              
                    </div>
                </div>
                
            </div>
        </div>
        <div class=" d-flex justify-content-center summary_box">
            <div class="row">
                <div class="col-12 summary_box-five d-flex justify-content-center">
                        <div class=" baggage_box-bot-button">
                            <button class="btn btn-primary">Kupuję</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
</div>
</div>
    `)

    return summary;
}