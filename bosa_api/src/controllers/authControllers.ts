import { Request, Response } from "express";
import dao from "../dao/authDAO";
import jwt from 'jsonwebtoken';
import keySecret from "../config/keySecret";
import { transporter } from "../config/mailer";
import pool from "../database/database";
import bcryptjs from "bcryptjs";


class AuthController {
    public async iniciarSesion(req: Request, res: Response) {
        try {
            //Se obtiene los datos del cuerpo de la peticion 
            const { username, password, ...rest } = req.body;
            //Se valida que no se reciban parametros no aceptados

            if (Object.keys(rest).length) {
                return res.status(400).json({ message: "La estructura no es correcta", code: 1 });
            }

            //Validacion de Datos
            if (!username || !password) {
                return res.status(400).json({ message: "Todos los campos son requeridos", code: 1 });
            }
            // Se verifican que los campos no este vacios
            if (username.trim() === "" || password.trim() === "") {
                return res.status(400).json({ message: "Todos los campos son requeridos", code: 1 });
            }
            //return res.json({username,password});
            //Obtener los datos del usuario
            const lstUsers = await dao.getUserByUsername(username);
            if (lstUsers.length <= 0) {
                return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto" });
            }
            for (let usuario of lstUsers) {
                let hashSaved = usuario.password;
                let compare = bcryptjs.compareSync(password, hashSaved)

                if (compare) {
                    const { password, fechaRegistro, ...newUser } = usuario;

                    var token = jwt.sign(newUser, keySecret.keys.secret, { expiresIn: '1h' });

                    return res.json({ message: "Autenticación Correcta", token, code: 0 });
                } else {
                    return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto" });
                }
            }

        } catch (error) {
            return res.status(500).json({ message: "Ocurrio un error", code: 1 })
        }
    }

    public async forgotPassword(req: Request, res: Response) {
        try {
            const { username } = req.body;

            if (!(username)) {
                return res.status(400).json({ message: 'El Nombre de usuario es requerido' });
            }

            const message = 'Verifica tu email para resetear tu contraseña.';
            let verificationLink;

            const lstUsers = await dao.getUserByUsername(username);
            if (lstUsers.length <= 0) {
                return res.status(404).json({ message: "El usuario es incorrecto" });
            }
            for (let usuario of lstUsers) {
                if (usuario.username == username) {
                    const token = jwt.sign({ idUsurio: usuario.idUsurio, username: usuario.username }, keySecret.keys.jwtSecretReset, { expiresIn: '10m' });
                    verificationLink = `http://localhost:4200/newpassword/${token}`;

                    try {
                        (await pool).query('UPDATE tusuario set resetToken = ? WHERE username = ?', [token, username]);
                    } catch (error) {
                        return res.status(400).json({ message: 'Ocurrio un error', code: 1 });
                    }


                    try {
                        // send mail with defined transport object
                        await transporter.sendMail({
                            from: '"El equipo de Uniformes BOSA" <noreply@uniformesbosa.com>', // sender address
                            to: usuario.username, // list of receivers
                            subject: "Recuperar Contraseña", // Subject line
                            html: `
                            <head><title>Gracias por tu preferencia</title>
                            <style>
                            * { margin: 0; padding: 0; box-sizing: border-box; } 
                            body { font-size: 16px; font-weight: 300; color: #888; background-color:rgba(230, 225, 225, 0.5); line-height: 30px; text-align: center; }
                            .contenedor{ width: 80%; min-height:auto; text-align: center; margin: 0 auto; padding: 40px; background: #ececec; border-top: 3px solid #84e619; }
                            .bold{ color:#333; font-size:25px; font-weight:bold; }
                            img{ margin-left: auto; margin-right: auto; display: block; padding:0px 0px 20px 0px; }
                            </style>
                            </head>
                            <body>
                            <div class='contenedor'>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <span><strong class='bold'> Recuperación de Contraseña</strong></span>
                                <p>&nbsp;</p> 
                                <p>Uniformes BOSA</p> 
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p><strong>Por favor ingrese al link dando click</strong></p>
                                <p>&nbsp;</p>
                                <p><a href="${verificationLink}"> Recuperar contraseña</a></p>
                            </div>
                            </body>
                            `, // html body
                        });
                    } catch (error) {
                        return res.status(500).json({ message: 'Ocurrio un error', code: 1 })
                    }

                    return res.json({ message, code: 0 });
                } else {
                    return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto" });
                }
            }
        } catch (error) {
            return res.status(500).json({ message: "Ocurrio un error", code: 1 })
        }
    };

    public async createNewPassword(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined> {
        const { password, restore } = req.body;
        /*const resetToken = req.headers.reset as string;*/

        if (!(restore && password)) {
            return res.status(400).json({ message: 'Todos los campos son requeridos' });
        }

        let jwtPayload;
        const lstUsers = await dao.getUserByResetToken(restore);

        if (lstUsers.length <= 0) {
            return res.status(404).json({ message: "No es posible llevar acabo lo requerido" });
        }

        for (let usuario of lstUsers) {
            if (usuario.resetToken == restore) {
                jwtPayload = jwt.verify(restore, keySecret.keys.jwtSecretReset);

                let passwordHash = await bcryptjs.hash(password, 8)

                try {
                    (await pool).query('UPDATE tusuario set password = ? WHERE resetToken = ?', [passwordHash, restore]);
                } catch (error) {
                    return res.status(401).json({ message: 'Algo sucedio' });
                }

                res.json({ message: 'La contraseña cambio!' })

            } else {
                return res.status(500).json({ message: "Algo ocurrio: Error del servidor" });
            }
        }
    }
}

export const authController = new AuthController();