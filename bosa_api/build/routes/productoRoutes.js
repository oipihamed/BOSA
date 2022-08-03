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
        //listado todos los productos
        this.router.get('/', /*[checkJwt],*/ productoController_1.productoController.listarProductos);
        //listado todos los productos
        this.router.get('/all', /*[checkJwt],*/ productoController_1.productoController.listarAllProductos);
        //listado todos los productos en Oferta
        this.router.get('/ofer', productoController_1.productoController.listarProductosOferta);
        //Listar 1 producto
        this.router.get('/:idProducto', productoController_1.productoController.listarProducto);
        //insercion
        this.router.post('/', /*[checkJwt],*/ productoController_1.productoController.insertarProducto);
        //actualizar
        this.router.put('/', /*[checkJwt],*/ productoController_1.productoController.actualizar);
        //eliminar
        this.router.delete('/:idProducto', /*[checkJwt],*/ productoController_1.productoController.eliminar);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
