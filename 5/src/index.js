const arr = [ 5, 6, 7, 8 ];
let sum = 1;
for ( let i = 0; i < arr.length; i++ ) {
    sum *= arr[i];
}
console.log( "Summa = " + sum );

const obj = { "Минск": "Беларусь", "Москва": "Россия", "Киев": "Украина" };
for ( const objKey in obj ) {
    console.log( objKey, "- это", obj[objKey] + "." );
}