"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const authDAO_1 = __importDefault(require("../dao/authDAO"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keySecret_1 = __importDefault(require("../config/keySecret"));
const mailer_1 = require("../config/mailer");
const database_1 = __importDefault(require("../database/database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AuthController {
    iniciarSesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Se obtiene los datos del cuerpo de la peticion 
                const _a = req.body, { username, password } = _a, rest = __rest(_a, ["username", "password"]);
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
                const lstUsers = yield authDAO_1.default.getUserByUsername(username);
                if (lstUsers.length <= 0) {
                    return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto" });
                }
                for (let usuario of lstUsers) {
                    let hashSaved = usuario.password;
                    let compare = bcryptjs_1.default.compareSync(password, hashSaved);
                    if (compare) {
                        const { password, fechaRegistro, idRol } = usuario, newUser = __rest(usuario, ["password", "fechaRegistro", "idRol"]);
                        var token = jsonwebtoken_1.default.sign(newUser, keySecret_1.default.keys.secret, { expiresIn: '1h' });
                        return res.json({ message: "Autenticación Correcta", token, idRol, code: 0 });
                    }
                    else {
                        return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto" });
                    }
                }
            }
            catch (error) {
                return res.status(500).json({ message: "Ocurrio un error", code: 1 });
            }
        });
    }
    forgotPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                if (!(email)) {
                    return res.status(400).json({ message: 'El email es requerido' });
                }
                const message = 'Verifica tu email para resetear tu contraseña.';
                let verificationLink;
                const lstUsers = yield authDAO_1.default.getUserByEmail(email);
                if (lstUsers.length <= 0) {
                    return res.status(404).json({ message: "El email es incorrecto" });
                }
                for (let usuario of lstUsers) {
                    if (usuario.email == email) {
                        const token = jsonwebtoken_1.default.sign({ idUsurio: usuario.idUsurio, email: usuario.email }, keySecret_1.default.keys.jwtSecretReset, { expiresIn: '10m' });
                        verificationLink = `http://localhost:4200/newpassword/${token}`;
                        try {
                            (yield database_1.default).query('UPDATE tusuario set resetToken = ? WHERE email = ?', [token, email]);
                        }
                        catch (error) {
                            return res.status(400).json({ message: 'Ocurrio un error', code: 1 });
                        }
                        try {
                            // send mail with defined transport object
                            yield mailer_1.transporter.sendMail({
                                from: '"El equipo de Uniformes BOSA" <noreply@uniformesbosa.com>',
                                to: usuario.email,
                                subject: "Recuperar Contraseña",
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
                        }
                        catch (error) {
                            return res.status(500).json({ message: 'Ocurrio un error', code: 1 });
                        }
                        return res.json({ message, code: 0 });
                    }
                    else {
                        return res.status(404).json({ message: "El email es incorrecto" });
                    }
                }
            }
            catch (error) {
                return res.status(500).json({ message: "Ocurrio un error", code: 1 });
            }
        });
    }
    ;
    createNewPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, restore } = req.body;
            /*const resetToken = req.headers.reset as string;*/
            if (!(restore && password)) {
                return res.status(400).json({ message: 'Todos los campos son requeridos' });
            }
            let jwtPayload;
            const lstUsers = yield authDAO_1.default.getUserByResetToken(restore);
            if (lstUsers.length <= 0) {
                return res.status(404).json({ message: "No es posible llevar acabo lo requerido" });
            }
            for (let usuario of lstUsers) {
                if (usuario.resetToken == restore) {
                    jwtPayload = jsonwebtoken_1.default.verify(restore, keySecret_1.default.keys.jwtSecretReset);
                    let passwordHash = yield bcryptjs_1.default.hash(password, 8);
                    try {
                        (yield database_1.default).query('UPDATE tusuario set password = ? WHERE resetToken = ?', [passwordHash, restore]);
                    }
                    catch (error) {
                        return res.status(401).json({ message: 'Algo sucedio' });
                    }
                    res.json({ message: 'La contraseña cambio!' });
                }
                else {
                    return res.status(500).json({ message: "Algo ocurrio: Error del servidor" });
                }
            }
        });
    }
}
exports.authController = new AuthController();
