const express = require("express");
const http = require("http");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: "./.nodered/",
    functionGlobalContext: {},
    ui: { path: "ui" },
    port: process.env.PORT || 1880
};

// Inicializa Node-RED
RED.init(server, settings);

// Rutas de Node-RED
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// Inicia servidor
server.listen(settings.port, () => {
    console.log(`Node-RED funcionando en puerto ${settings.port}`);
});

// Arranca flujos
RED.start();
