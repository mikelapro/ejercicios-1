let frase =  prompt( 'Ingrese una frase', 'ababa $ aA' );
let total = 0;

for ( let i = 0; i < frase.length; i++ ) {
    if ( frase[ i ] == 'a' ) {
        total++;
    }
}

document.write( `En total tu frase tiene ${total} a.` );
