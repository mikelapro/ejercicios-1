let num1 =  prompt( 'ingrese un número' );
let num2 =  prompt( 'ingrese otro número' );
let num3 =  prompt( 'ingrese otro número' );
let masGrande = 0;

num1 = parseInt( num1 );
num2 = parseInt( num2 );
num3 = parseInt( num3 );

if ( num1 > num2 ) {
    masGrande = num1;
} else if ( num2 > num3 ) {
    masGrande = num2;
} else {
    masGrande = num3;
}

document.write( masGrande );
