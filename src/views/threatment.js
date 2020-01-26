import $ from 'jquery';

export const threatment = ()=> {
    const fragment = $(new DocumentFragment() );

    fragment
    .append('<h2>Threatment</h2>')
    .append('<p>Lorem ipsum dolor sit amet ...</p>')

    return fragment;
};