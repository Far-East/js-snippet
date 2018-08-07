// Добавление атрибута data jQery
jQuery(document).ready(function($) {
    // Сначала добавляем класс
    $( '.gallery-item a' ).addClass( 'fedev-fansy' );
    // К классу добавляем атрибут
    $('a.fedev-fansy').attr('data-fancybox', 'group');
    $('a.fedev-fansy')[0].setAttribute('data-fancybox', 'group');

});
