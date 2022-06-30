import { Router } from "express";
import { productoController } from "../controllers/productoController";

class ProductoRoutes {
    public router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config() {
        //listado
        this.router.get('/', /*[checkJwt],*/productoController.listar);
        //insercion
        this.router.post('/', /*[checkJwt],*/productoController.insertarProducto);
        //actualizar
        this.router.put('/', /*[checkJwt],*/productoController.actualizar);
        //eliminar
        this.router.delete('/', /*[checkJwt],*/productoController.eliminar);
    }
}

const productoRoutes = new ProductoRoutes ();
export default productoRoutes.router;
