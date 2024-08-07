let residencias = require('./contatos');

function listarResidencias() {
    for (let i = 0; i < residencias.length; i++) {
    const residencia = residencias[i];
    console.log(`
        ID: ${residencia.id},
        Bairro: ${residencia.bairro},
        Rua: ${residencia.rua},
        Número: ${residencia.numero},
    `);
    
    for (let j = 0; j < residencia.morador.length; j++) {
        console.log(`        Telefone: ${j+1}. ${residencia.morador[j]}`);
        }
        console.log(''); 
    };
};

    module.exports = listarResidencias;