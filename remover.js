let residencias = require('./contatos');

function removerResidencia(index) {
    residencias.splice(index, 1);
    }

module.exports = removerResidencia;    