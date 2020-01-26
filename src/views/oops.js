import $ from 'jquery';

export const oops = ()=> {
    const fragment = $(new DocumentFragment() );

    fragment
    .append('<h2>Oops</h2>')
    .append('<p>Coś poszło nie tak</p>')

    return fragment;
};