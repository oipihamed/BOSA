"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = require("../controllers/productoController");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //listado
        this.router.get('/', /*[checkJwt],*/ productoController_1.productoController.listar);
        //insercion
        this.router.post('/', /*[checkJwt],*/ productoController_1.productoController.insertarProducto);
        //actualizar
        this.router.put('/', /*[checkJwt],*/ productoController_1.productoController.actualizar);
        //eliminar
        this.router.delete('/', /*[checkJwt],*/ productoController_1.productoController.eliminar);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
