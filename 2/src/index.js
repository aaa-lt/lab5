let name = "Alt";
name = name.split( "" );

for ( let i = 0; i < name.length; i++ ) {
    console.log( name[i] );
}


let num = "12345";
num = num.split( "" );

let sum = 1;
for ( let i = 0; i < num.length; i++ ) {
    sum *= num[i];
}
console.log( sum );