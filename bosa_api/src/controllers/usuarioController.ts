import { Request, Response } from 'express';
import dao from '../dao/usuarioDAO';
import bcryptjs from "bcryptjs";
import pool from '../database/database';

class UsuarioController {

    public async listar(req: Request, res: Response) {
        try {

            const result = await dao.getUserAdmin();

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message: `${error.message}` });
        }
    }

    public async obtenerUno(req: Request, res: Response) {
        try {

            // se obtienen los datos del body
            var { idUsuario } = req.params;

            const result = await dao.getOnlyUser(parseInt(idUsuario));

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message: `${error.message}` });
        }
    }

    public async insertar(req: Request, res: Response) {
        try {
            //Se obtiene los datos de la peticion
            const { name, lastName, username, password, email, street, district, state, city, zipcode, phone, ...rest } = req.body;
            //Se valida la informacion en caso de no venir algun campo vacio se envia mensaje de error
            let respuestaBd = await dao.signUpUser(name, lastName, username, email, password, street, district, state, city, zipcode, phone);

            if (respuestaBd.codigo == 0) {
                
                return res.json({ message: respuestaBd.mensaje, code: respuestaBd.codigo });
            } else {
                return res.status(500).json({ message: respuestaBd.mensaje, code: respuestaBd.codigo });
            }
        } catch (error) {
            return res.status(500).json({ message: "Ocurrio un error", code: 1 })
        }

    }

    public async actualizar(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
        const { nombres, apellidos, username, password, email, calle, colonia, ciudad, telefono, idRol } = req.body;

        if (!(nombres && apellidos && username && password && email && calle && colonia && ciudad && telefono && idRol && idUsuario)) {
            return res.status(400).json({ message: 'Todos los campos son requeridos' });
        }

        // se obtienen los datos del body
        var { idUsuario } = req.params;
        
        const lstUsers = await dao.getOnlyUser(parseInt(idUsuario));

        if (lstUsers.length <= 0) {
            return res.status(404).json({ message: "No es posible llevar acabo lo requerido" });
        }

        for (let usuario of lstUsers) {
            if (usuario.idUsuario == idUsuario) {

                let passwordHash = await bcryptjs.hash(password, 8)

                try {
                    (await pool).query('UPDATE tusuario set password = ?, nombres = ?, apellidos = ?, username = ?, email = ?, calle = ?, colonia = ?, ciudad = ?, telefono = ?, idRol = ? WHERE idUsuario = ?', [passwordHash, nombres, apellidos, username, email, calle, colonia, ciudad, telefono, idRol, idUsuario,]);
                } catch (error) {
                    return res.status(401).json({ message: 'Algo sucedio' });
                }

                res.json({ message: 'El usuario a sido actualizado!' })

            } else {
                return res.status(500).json({ message: "Algo ocurrio: Error del servidor" });
            }
        }
    }

    public async eliminar(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
        // se obtienen los datos del body
        var { idUsuario } = req.params;

        if (!(idUsuario)) {
            return res.status(400).json({ message: 'Se requiere de un ID'});
        }
        
        const lstUsers = await dao.getOnlyUser(parseInt(idUsuario));

        if (lstUsers.length <= 0) {
            return res.status(404).json({ message: "No es posible llevar acabo lo requerido" });
        }

        for (let usuario of lstUsers) {
            if (usuario.idUsuario == idUsuario) {

                try {
                    (await pool).query('DELETE FROM tusuario WHERE idUsuario = ?', [idUsuario,]);
                } catch (error) {
                    return res.status(401).json({ message: 'Algo sucedio' });
                }

                res.json({ message: 'El usuario a sido eliminado' })

            } else {
                return res.status(500).json({ message: "Algo ocurrio: Error del servidor" });
            }
        }
    }

}
export const usuarioController = new UsuarioController();

function idUsuario(idUsuario: any): number {
    throw new Error('Function not implemented.');
}
