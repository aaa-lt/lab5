const time = Number( prompt( "Число?" ) );

if ( time >= 0 && time < 15 ) {
    console.log( "Число попадает в 1 четверть" );
} else if ( time >= 15 && time <= 29 ) {
    console.log( "Число попадает во 2 четверть" );
} else if ( time >= 30 && time <= 44 ) {
    console.log( "Число попадает в 3 четверть" );
} else if ( time >= 45 && time <= 59 ) {
    console.log( "Число попадает в 4 четверть" );
} else {
    console.log( "Неправильное чило :(" );
}

const lang = prompt( "Язык?" );
let week;
switch ( lang ) {
    case "ru":
        week = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ];
        console.log( week );
        break;
    case "by":
        week = [ "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота", "Нядзеля" ];
        console.log( week );
        break;
    default:
        console.log( "Неправильный язык :(" );
}