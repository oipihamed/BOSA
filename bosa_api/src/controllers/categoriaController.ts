import { Request , Response} from 'express';
import dao from '../dao/categoriaDAO';

class CategoriaController{

    //listar las categorias
    public async listarCategorias(req: Request, res: Response) {
        try {

            const result = await dao.getCategorias();

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
    }

    //listar una categoria
    public async listarUnaCategoria(req: Request, res: Response) {
        try {
            // se obtienen los datos del body
            var { idCategoria } = req.params;

            const result = await dao.getCategoria(parseInt(idCategoria));

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
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

export const categoriaController = new CategoriaController();