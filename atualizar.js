let residencias = require('./contatos');

function atualizarResidencias(index, novaResidencia) {
    residencias[index] = novaResidencia;
    }

module.exports = atualizarResidencias    