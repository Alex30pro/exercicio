let residencias = require('./contatos');

function listarResidencias() {
    residencias.forEach((residencia, index) => {
    console.log(`${index+1} Bairro: ${residencia.bairro}, Rua:
    ${residencia.rua}, Número: ${residencia.numero}, Morador: ${residencia.morador}`);
    });

    }

    module.exports = listarResidencias;