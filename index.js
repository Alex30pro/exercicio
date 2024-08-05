const prompt = require('prompt-sync')();

const listarResidencias = require('./listar');
const adicionarResidencia = require('./adicionar');
const atualizarResidencias = require('./atualizar');
const removerResidencia = require('./remover');

mainMenu();

function mainMenu(){
    console.log(`
        "Menu de residências"
        1 - Listar residências
        2 - Adicionar residência
        3 - Atualizar residência
        4 - Remover residência
        5 - Sair
    `)
    const opcao = prompt('Escolha uma opção: ');
    let index;

    switch(opcao){
        case '1':
            listarResidencias();
            mainMenu();
            break;
        case '2':
            const bairro = prompt('Digite o nome do bairro: ');
            const rua = prompt('Digite o nome da rua: ');
            const numero = prompt('Digite o número da residência: ');
            const morador = prompt('Digite o nome do marador: ');
            adicionarResidencia({bairro, rua, numero, morador});
            console.log('Contato adicionado com sucesso!');
            mainMenu();
            break;
        case '3':
            listarResidencias();
            index = parseInt(prompt('Número do contato a atualizar: ')) -1;
            const novoBairro = prompt('Digite o novo nome do bairro: ');  
            const novaRua = prompt('Digite o nome da nova rua: ');
            const novoNumero = prompt('Digite o novo número da residência: ');
            const novoMorador = prompt('Digite o novo morador da residencia: ');
            atualizarResidencias(index, {bairro: novoBairro, rua: novaRua, numero: novoNumero, morador: novoMorador});
            console.log('Contato atualizado com sucesso');
            mainMenu();
            break;
        case '4':
            index = parseInt(prompt('Número da residência a remover: ')) - 1;
            removerResidencia(index);
            console.log('Residência removido com sucesso!');
            mainMenu();
            break;
        case '5':
            console.log('Saindo do programa...');
            break;
        default:
            console.log('Opção inválida!');
            mainMenu();        
    }
}


