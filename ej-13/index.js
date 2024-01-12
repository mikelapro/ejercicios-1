let numero = prompt( 'Ingrese un número', '8' );

if ( isNaN( numero ) ) {
    document.write( 'por favor, ingrse un número válido.' );
} else {
    numero = parseInt( numero );

    if ( numero % 2 === 0 
      || numero % 3 === 0 
      || numero % 5 === 0 
      || numero % 7 === 0 ) {
        document.write( numero + ' Es divisible por 2, 3, 5 o 7.' );
    } else {
        document.write( numero + ' No es divisible por 2, 3, 5 ni 7.' );
    }
}
