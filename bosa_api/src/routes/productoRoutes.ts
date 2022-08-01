import { Router } from "express";
import { productoController } from "../controllers/productoController";

class ProductoRoutes {
    public router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config() {
        //listado todos los productos
        this.router.get('/', /*[checkJwt],*/productoController.listarProductos);
        //listado todos los productos en Oferta
        this.router.get('/ofer', productoController.listarProductosOferta);
        //Listar 1 producto
        this.router.get('/:idProducto', productoController.listarProducto);
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
