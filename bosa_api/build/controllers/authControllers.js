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
                return res.json({ username, password });
                //Obtener los datos del usuario
                const lstUsers = yield authDAO_1.default.getUserByUsername(username);
                if (lstUsers.length <= 0) {
                    return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto" });
                }
                for (let usuario of lstUsers) {
                    if (usuario.password == password) {
                        const ;
                        (password, fechaRegistro, );
                        newUser;
                        usuario;
                        var token = jsonwebtoken_1.default.sign(newUser, keySecret_1.default.keys.secret, { expiresIn: '1h' });
                        return res.json({ message: "Autenticación Correcta", token, code: 0 });
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
}
exports.authController = new AuthController();
