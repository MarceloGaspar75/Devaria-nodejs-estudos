const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao e se voce pode entrar no kart');
console.log('alem da suas verificacoes, precisamos verificar se coe esta na lista de presenca do horario');

readLine.question('Qual o ano do seu Nascimento?', ano => {
    if (ano > 2004) {
        console.log('Voce nao tem 18 anos');
    } else{
        readLine.question("voce tem habiliatacao? (Sim/Nao) ", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM" )){
                console.log('Voce não tem habilitacao para entrar no kart');
            }else{
                readLine.question("Qual o seu nome?", nome => {
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo ao kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome não foi identificado na lista de presenca');
                    }
                })
            }
        })
    }
})