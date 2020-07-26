import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function () {
    $('.owl-hero').owlCarousel({
        nav: true,
        navText: ["<img src='../images/icons/chevron-right.png'>", "<img src='../images/icons/chevron-right.png'>"],
        loop: true,
        items: 1
    });
});