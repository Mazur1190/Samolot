import $ from 'jquery';
import image from '../image/images/plane_small.jpg'



export const airplaneSmall = () => {
 
    const airplane = $(`
    <div class="column">
    <div class="col-12 d-flex justify-content-center zero">
        <div class="airplanes">
            <div class="col-12 d-flex justify-content-center airplane">
                <img src="${image}" class="aurplane_small" alt="">
                <svg>
                    <rect class="airplane_small-seat status-available" id="A1" x="68.865" y="314.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C1" x="100.865" y="314.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="A2" x="68.865" y="362.11" width="30.156" height="31.86" />
                    <rect class="airplane_small-seat status-available" id="C2" x="100.865" y="362.11" width="30.156" height="31.86" />
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
    
        fetch('http://localhost:3000/airplaneSmall') // Pobiera baze danych tylko Array zwiazany z "seats"
        .then((res) => {
            return res.json();   // to co pobralem przerabia na jsona (jest to konieczne w kazdym przypadku inaczej JS tego nie przeczyta!)
        })
        .then((elements) => {  // Pobiera wszystkie elementy "seats" - elements jest nazwa parametru
            elements.forEach(el => {   // wrzucamy parametr (elements), a nastepnie do wszystkich tych elementow iterujemy kazdy element "el" (tez jest to nazwa parametru)
                if(el.status === false){    // sprawdzamy status kazdego elementu (status jest wewnatrz jsona! status odwoluje sie do statusu w jsonie!)
                    // console.log(document.getElementById(el.id)) // sprawdzenie czy jest taki element
                  document.getElementById(el.id).classList.add("status-booked") // pobieramy element ktory zostal utworzony na stronie i przypisujemy do niego klase
                  document.getElementById(el.id).classList.remove("status-available")
                }
            });
          });
    return airplane ;
  };


// function (elements) {}

// const nazwa = document.querySelectorAll('.classa1.class2')