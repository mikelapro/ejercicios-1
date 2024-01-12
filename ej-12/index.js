let frase = prompt( 'Ingrese una frase', 'frase copada' );// 3a, 1e, 1o.
let total = 0;
const vocales = ['a', 'e', 'i', 'o', 'u'];
let resultados = [0, 0, 0, 0, 0];

for ( let i = 0; i < frase.length; i++ ) {
    if ( vocales.includes( frase[i] ) ) {
        let indice = vocales.indexOf( frase[i] );
        resultados[indice]++;
    }
}

for (let i = 0; i < resultados.length; i++) {
    document.write( `Total ${vocales[i]}: ${resultados[i]} <br>` );
}
