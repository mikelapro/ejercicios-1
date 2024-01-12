let numero = prompt( 'Ingrese un número', '8' );

if ( isNaN( numero ) ) {
    document.write( 'Debe ingrsar un número válido.' );

} else {
    document.write( `El número dado es ${numero}. <br>` );

    for (let i = 1; i <= numero; i++) {
        if ( numero % i === 0 ) {
            document.write( `Es divisible por ${i}. <br>` );
        } 
    }
}

