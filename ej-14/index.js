let numero = prompt( 'Ingrese un número', '8' );

if ( isNaN( numero ) ) {
    document.write( 'por favor, ingrse un número válido.' );
} else {
    numero = parseInt( numero );

    // % es el modulo, da el resto de una división.
    if( numero % 2 === 0 ){
        document.write( 'Es divisible por 2. <br>' );
    }

    if( numero % 3 === 0 ){
        document.write( 'Es divisible por 3. <br>' );
    }

    if( numero % 5 === 0 ){
        document.write( 'Es divisible por 5. <br>' );
    }

    if( numero % 7 === 0 ){
        document.write( 'Es divisible por 7. <br>' );
    }
}
