function square(num) {
    return num * num;
}

function sum(a, b) {
    return a + b;
}

function divide(a, b, c) {
    return (a + b) / c;
}

function week(num) {
    let week = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ];
    if ( num >= 1 && num <= 7 ) {
        return week[num - 1];
    }
}

console.log( square( 5 ) );
console.log( sum( 1, 2 ) );
console.log( divide( 1, 2, 3 ) );
console.log( week( 4 ) );