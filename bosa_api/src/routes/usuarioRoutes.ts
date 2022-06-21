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
        this.router.get('/', /*[checkJwt],*/usuarioController.listar);
        //insercion
        this.router.post('/', /*[checkJwt],*/usuarioController.insertar);
        //actualizar
        this.router.put('/', /*[checkJwt],*/usuarioController.actualizar);
        //eliminar
        this.router.delete('/', /*[checkJwt],*/usuarioController.eliminar);
    }
}

const usuarioRoutes = new UsuarioRoutes ();
export default usuarioRoutes.router;
