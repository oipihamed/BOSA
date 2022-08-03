import { Router } from "express";
import { categoriaController } from "../controllers/categoriaController";

class CategoriaRoutes {
    
    public router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config() {
        //listado todas las categorias
        this.router.get('/', /*[checkJwt],*/categoriaController.listarCategorias);
        //Obtener una categoria
        this.router.get('/:idCategoria', categoriaController.listarUnaCategoria);
        //insercion
        this.router.post('/', /*[checkJwt],*/categoriaController.insertar);
        //actualizar
        this.router.put('/', /*[checkJwt],*/categoriaController.actualizar);
        //eliminar
        this.router.delete('/', /*[checkJwt],*/categoriaController.eliminar);
    }
}

const categoriaRoutes = new CategoriaRoutes ();
export default categoriaRoutes.router;