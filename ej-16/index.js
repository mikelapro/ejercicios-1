let numero1 = prompt( 'Ingrese un número', '8' );
let numero2 = prompt ( 'Ingrese otro número', '7' );
let numeroMenor;

if ( isNaN( numero1 ) && isNaN( numero2 ) ) {
    document.write( 'Debe ingrsar números válidos.' );

} else {
    if ( numero1 < numero2 ) {
        numeroMenor = numero1;
    } else {
        numeroMenor = numero2;
    }

    for (let i = 1; i <= numeroMenor; i++) {
        if ( numero1 % i === 0 && numero2 % i === 0 ) {
            document.write( `${i} es divisor común entre ${numero1} y ${numero2}. <br>` );
        } 
    }
}
