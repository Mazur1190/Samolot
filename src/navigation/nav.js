

import $ from 'jquery';
import { navItem } from './nav-item';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes'

export const nav = () => {
  const navbar = $(`
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <span class="navbar-brand">IT SPA</span>
      <ul class="navbar-nav mr-auto"></ul>
    </nav>
  `);

  // nav item spodziewa sie funkcji, ktora bedzie wywolywana przy kliknieciu
//   const bookingNavItem = navItem(
//     "Booking",
//     () => navbar.trigger(routeChange, { path: '/booking' })
//   );
//   navbar.find('ul').append(bookingNavItem);


//Bardziej dynamiczny sposob dodawania itemow w navbarze
    routes.map( (item) => {
        item.name = navItem(
            item.name,
            () => navbar.trigger(routeChange, { path: item.path })
        );
        navbar.find('ul').append(item.name);
    })

  return navbar;
};



// TO SAMO ALE PRZEZ WYKLADOWCE
// import $ from 'jquery';
// import { navItem } from './nav-item';
// import { routeChange } from '../router/route-change';
// import { routes } from '../router/routes';

// export const nav = () => {
//   const navbar = $(`
//     <nav class="navbar navbar-expand navbar-dark bg-dark">
//       <span class="navbar-brand">IT SPA</span>
//       <ul class="navbar-nav mr-auto"></ul>
//     </nav>
//   `);

//   // chcemy zbudowac tablice elementow navItem z odpowiednimi nazwami i callbackami
//   const navItems = routes.map(route => {
//     const { name, path } = route;
//     return navItem(name, () => navbar.trigger(routeChange, { path: path }));
//   });

//   navbar.find('ul').append(navItems);

//   return navbar;
// };