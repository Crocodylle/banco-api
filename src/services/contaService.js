const createError = require('http-errors');
const contasModel = require('../models/contasModel');

async function getContas(page = 1, limit = 10) {
    const contas = await contasModel.getContas();

    return {
        contas
    };
}

async function getContaById(id) {
    const contas = await contasModel.getContaById(id)
    return contas;
}

async function inserirConta(id, titular, saldo, ativa) {
    if (saldo < 10) {
       throw new createError(400, 'Saldo mínimo de R$ 10,00');
    }
    await contasModel.inserirConta(id, titular, saldo, ativa);
}

module.exports = {
    getContas,
    getContaById,
    inserirConta
};
