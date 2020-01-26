import $ from 'jquery';

export const booking = ()=> {
    const fragment = $(new DocumentFragment() );

    fragment
    .append('<h2>Booking</h2>')
    .append('<p>Lorem ipsum dolor sit amet ...</p>')

    return fragment;
};