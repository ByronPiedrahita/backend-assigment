const TABLA = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function problem(query, id){
        const agente = await store.query('agentes', { libre: 0 });
        const problema = {
           detalle: query.detalle,
           id_user: id.id,
           id_agente: agente.id,
       } 
       store.agente(agente.id, 1);
       return store.problem(problema);
    }

    return {
        list,
        get,
        problem,
    };
}