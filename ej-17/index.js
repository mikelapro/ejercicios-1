let numero = prompt( 'Ingrese un número', '8' );
let cantidadDivisores = 0;

if ( isNaN( numero ) ) {
    document.write( 'Debe ingrsar un número válido.' );

} else {
    document.write( `El número dado es ${numero}. <br>` );

    if ( numero > 100 ) {
        document.write( 'Debe ingrsar un número menor a 100 ( porque se me rompe el cpu :) ).' );
    } else {
        for ( let i = 1; i <= numero; i++ ) {
            if ( numero % i === 0 ) {
                document.write( `Es divisible por ${i}. <br>` );
                cantidadDivisores++;
            }
        }

        if ( cantidadDivisores == 2 ) {
            document.write( `${numero} es número primo :).` );
        } else {
            document.write( `${numero} no es número primo.` );
        }
    }
}
