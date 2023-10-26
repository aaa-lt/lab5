function a(a, b) {
    if ( !isNaN( a ) && !isNaN( b ) ) {
        return a === b;
    } else {
        return NaN;
    }
}

function b(a, b) {
    if ( !isNaN( a ) && !isNaN( b ) ) {
        return (a + b) > 10;
    } else {
        return NaN;
    }
}

function c(num) {
    if ( !isNaN( num ) ) {
        return num < 0;
    } else {
        return NaN;
    }
}