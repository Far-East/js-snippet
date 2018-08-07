// Добавление атрибута data jQery
jQuery(document).ready(function($) {
    // Сначала дорбавляем класс fedev-fansy
    $( '.gallery-item a' ).addClass( 'fedev-fansy' );
    // К нему добавляем атрибут
    $('a.fedev-fansy').attr('data-fancybox', 'group');
    $('a.fedev-fansy')[0].setAttribute('data-fancybox', 'group');

});
