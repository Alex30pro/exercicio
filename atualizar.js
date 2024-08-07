let residencias = require('./contatos');

function atualizarResidencias(id, novaResidencia){
    const index = residencias.findIndex(residencia => residencia.id === id);
    if (index !== -1) {
        residencias[index] = {id, ...novaResidencia};
    } else {
        console.log('Residência não encontrado');
    };

    };


module.exports = atualizarResidencias    