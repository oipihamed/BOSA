"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //listado
        this.router.get('/', /*[checkJwt],*/ usuarioController_1.usuarioController.listar);
        //insercion
        this.router.post('/', /*[checkJwt],*/ usuarioController_1.usuarioController.insertar);
        //actualizar
        this.router.put('/', /*[checkJwt],*/ usuarioController_1.usuarioController.actualizar);
        //eliminar
        this.router.delete('/', /*[checkJwt],*/ usuarioController_1.usuarioController.eliminar);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
