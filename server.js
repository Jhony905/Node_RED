const host = global.get("MYSQL_HOST");
const user = global.get("MYSQL_USER");
const pass = global.get("MYSQL_PASS");
const db   = global.get("MYSQL_DB");


const http = require('http');
const express = require('express');
const RED = require('node-red');
const settings = require('./settings');

const app = express();
const server = http.createServer(app);

// Inicializa Node-RED
RED.init(server, settings);

// Rutas de Node-RED
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// Inicia servidor
const PORT = process.env.PORT || 1880;
server.listen(PORT, () => {
    console.log(`Node-RED funcionando en puerto ${PORT}`);
});

// Arranca flujos
RED.start();
