const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/problem/:id', problem);

// Internal functions
function list(req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function get(req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function problem(req, res) {
    Controller.problem(req.query, req.params)
        .then((problems) => {
            response.success(req, res, problems, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

module.exports = router;