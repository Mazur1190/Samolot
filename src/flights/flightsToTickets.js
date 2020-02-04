import $ from 'jquery';

export const flightsToTickets = () => {
    const flightsView = $(`
    <div class="col-12 d-flex justify-content-center flight-selector_ticket">
    <div class="flight-selector_ticket-class">
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
    `)

    return flightsView;
}