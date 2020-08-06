const TABLA = 'problemas';

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

    async function resuelto(id){
        const table = 'problemas';
        const problema = await store.query(table, { id: id.id });
        console.log(problema.id_agente);
        store.agente(problema.id_agente, 0);
        return store.resuelto(problema);
    }

    return {
        list,
        get,
        resuelto,
    };
}