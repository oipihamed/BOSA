import { Router } from "express";
import { usuarioController } from "../controllers/usuarioController";

class UsuarioRoutes {
    public router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config() {
        //listado
        this.router.get('/', usuarioController.listar);

        //Obtener uno
        this.router.get('/:idUsuario', usuarioController.obtenerUno);

        //insercion
        this.router.post('/', usuarioController.insertar);

        //actualizar
        this.router.put('/:idUsuario', usuarioController.actualizar);
        
        //eliminar
        this.router.delete('/:idUsuario', usuarioController.eliminar);
    }
}

const usuarioRoutes = new UsuarioRoutes ();
export default usuarioRoutes.router;
