
// Ограничиваем вывод только букв в поле имя и цифр в поле телефон
function limitInput( k, obj ) {
    switch( k ){
        case 'text':
            obj.value = obj.value.replace(/[^а-яА-ЯёЁ^a-zA-Z -]/ig,'');
            break;
        case 'num':
            obj.value = obj.value.replace(/[^0-9+]/ig,'');
            break;
    }
}

