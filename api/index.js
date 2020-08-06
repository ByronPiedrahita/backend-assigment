const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');
const agente = require('./components/agente/network');
const problema = require('./components/problema/network');

const app = express();

// ROUTER
app.use('/api/user', user);
app.use('/api/agentes', agente);
app.use('/api/problema', problema);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});