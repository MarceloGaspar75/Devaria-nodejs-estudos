const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha peimeira constante' /* declaração de variavel - sempre ccomeçar com const (constante) */
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`o usuario digitou: ${leituraDeCampo}`); /* string especial crase permite inserir inerpolacio string com variáveis no meio */
});