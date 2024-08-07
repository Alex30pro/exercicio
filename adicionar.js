let residencias = require('./contatos');

function adicionarResidencia(residencia) {
    residencia.id = residencias.length + 1;

    let jaExiste = residencias.find(resi => resi.email === residencia.email);
    if (jaExiste) {
        console.error('Já existe um email com esse nome cadastrado! Tente um diferente.');
    } else {
    residencias.push(residencia);
    console.log('Usuário adicionado com sucesso!');
    }
}

module.exports = adicionarResidencia;   