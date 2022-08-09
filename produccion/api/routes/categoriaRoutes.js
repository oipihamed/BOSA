"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaController_1 = require("../controllers/categoriaController");
class CategoriaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //listado todas las categorias
        this.router.get('/', /*[checkJwt],*/ categoriaController_1.categoriaController.listarCategorias);
        //Obtener una categoria
        this.router.get('/:idCategoria', categoriaController_1.categoriaController.listarUnaCategoria);
        //insercion
        this.router.post('/', /*[checkJwt],*/ categoriaController_1.categoriaController.insertar);
        //actualizar
        this.router.put('/', /*[checkJwt],*/ categoriaController_1.categoriaController.actualizar);
        //eliminar
        this.router.delete('/', /*[checkJwt],*/ categoriaController_1.categoriaController.eliminar);
    }
}
const categoriaRoutes = new CategoriaRoutes();
exports.default = categoriaRoutes.router;
