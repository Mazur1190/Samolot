import { Cart } from "./cart"

export const itSpaCart = () => {
    const cart = new Cart();

    cookieStore.addEventListener('change', (event) => {
        // jesli zaistniala zmiana w cookies,
        //ponownie pobieram zawartosc kosza
        const nazwaZawartosci = cart.get();
        // ... i poprawiam wyswietlane przez kosz informacje

    });
}