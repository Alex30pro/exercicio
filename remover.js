let residencias = require('./contatos');

function removerResidencia(index, id) {
    if (index !== -1) {
        residencias[index] = {id, ...residencias};
        residencias.splice(index, 1);
    } else {
        console.log('Usuário não encontrado');
    };
 };


module.exports = removerResidencia;    