let frase =  prompt( 'Ingrese una frase', 'aeiou' );
const vocales = [ 'a', 'e', 'i', 'o', 'u' ];

for ( let i = 0; i < frase.length; i++ ) {
    if ( vocales.includes( frase[ i ] ) ) {
        document.write( frase[ i ] );
    }
}
