import { Request , Response} from 'express';

class UsuarioController {

    public listar(req: Request, res: Response) { 
        res.json({ message : "listar"})
    }

    public insertar(req: Request, res: Response) {
        res.json({ message : "insertar"})
     }

    public actualizar(req: Request, res: Response) { 
        res.json({ message : "actulizar"})
    }

    public eliminar(req: Request, res: Response) { 
        res.json({ message : "eliminar"})
    }

}
export const usuarioController = new UsuarioController();