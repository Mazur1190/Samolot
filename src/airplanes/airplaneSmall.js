import $ from 'jquery';
import image from '../image/images/plane_small.jpg'



export const airplaneSmall = () => {
    fetch('../data_base/seats_small.json')
        .then((res) => {
            return res.json();
        })
        .then((element) => {
            console.log(element)
        })
    const airplane = $(`
    <div class="column">
    <div class="col-12 d-flex justify-content-center zero">
        <div class="airplanes">
            <div class="col-12 d-flex justify-content-center airplane">
                <img src="${image}" class="aurplane_small" alt="">
                <svg>
                    
                    <rect class="airplane_small-seat status-booked" id="A1" x="68.865" y="314.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C1" x="100.865" y="314.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A2" x="68.865" y="362.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-booked" id="C2" x="100.865" y="362.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A3" x="68.865" y="411.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C3" x="100.865" y="411.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A4" x="68.865" y="459.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C4" x="100.865" y="459.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A5" x="68.865" y="508.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C5" x="100.865" y="508.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A6" x="68.865" y="557.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C6" x="100.865" y="557.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A7" x="68.865" y="605.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C7" x="100.865" y="605.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A8" x="68.865" y="688.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C8" x="100.865" y="688.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A9" x="68.865" y="736.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C9" x="100.865" y="736.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A10" x="68.865" y="785.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C10" x="100.865" y="785.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A11" x="68.865" y="833.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C11" x="100.865" y="833.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A12" x="68.865" y="882.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C12" x="100.865" y="882.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A13" x="68.865" y="931.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C13" x="100.865" y="931.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H1" x="169.865" y="314.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K1" x="201.865" y="314.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H2" x="169.865" y="362.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K2" x="201.865" y="362.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H3" x="169.865" y="411.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K3" x="201.865" y="411.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H4" x="169.865" y="459.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K4" x="201.865" y="459.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H5" x="169.865" y="508.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K5" x="201.865" y="508.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H6" x="169.865" y="557.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K6" x="201.865" y="557.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H7" x="169.865" y="605.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K7" x="201.865" y="605.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H8" x="169.865" y="688.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K8" x="201.865" y="688.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H9" x="169.865" y="736.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K9" x="201.865" y="736.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H10" x="169.865" y="785.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K10" x="201.865" y="785.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H11" x="169.865" y="833.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K11" x="201.865" y="833.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="H12" x="169.865" y="882.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="K12" x="201.865" y="882.11" width="30.156" height="31.86" />
                </svg>
            </div>
            </div>
            </div>
        </div>
        `);
    
  
    return airplane ;
  };