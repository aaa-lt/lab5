const calc = (result) => {
    result += result * 0.15;
    alert( "Премия 15%, на руки " + result );
    result -= result * 0.15;
    alert( "Вычитаем налоги 10%, осталось " + result );
    result -= 90;
    alert( "Сходили в магазин на 90р, осталось " + result );
    result /= 2;
    alert( "Отдали половину жене, осталось " + result );
};

calc( Number( prompt( "Введите сумму зарплаты" ) ) )
;