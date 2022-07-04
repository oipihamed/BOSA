import { Request , Response} from 'express';
import dao from '../dao/usuarioDAO';

class UsuarioController {

    public listar(req: Request, res: Response) { 
        res.json({ message : "listar"})
    }

    public async insertar(req: Request, res: Response) {
        try {
            //Se obtiene los datos de la peticion
            const {name, lastName,username,password,email, street,district,state,city,zipcode,phone, ...rest}= req.body;
            //Se valida la informacion en caso de no venir algun campo vacio se envia mensaje de error
            let respuestaBd= await dao.signUpUser(name, lastName,username,email,password,street,district,state,city,zipcode,phone);
 
            if (respuestaBd.codigo==0 ) {
                        return res.json ({ message:respuestaBd.mensaje, code:respuestaBd.codigo});
                   }else{
                        return res.status(500).json({message:respuestaBd.mensaje,code:respuestaBd.codigo});
                   }
          } catch (error) {
           return res.status(500).json({message: "Ocurrio un error", code:1})
          }
          
     }

    public actualizar(req: Request, res: Response) { 
        res.json({ message : "actulizar"})
    }

    public eliminar(req: Request, res: Response) { 
        res.json({ message : "eliminar"})
    }

}
export const usuarioController = new UsuarioController();