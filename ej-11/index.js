let frase =  prompt( 'Ingrese una frase', 'aeiouaeiou' );
let total = 0;
const vocales = [ 'a', 'e', 'i', 'o', 'u' ];

for ( let i = 0; i < frase.length; i++ ) {
    if ( vocales.includes( frase[ i ] ) ) {
        total = total + 1;
    }
}

document.write( `Total de vocales: ${total}` );