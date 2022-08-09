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
exports.usuarioController = void 0;
const usuarioDAO_1 = __importDefault(require("../dao/usuarioDAO"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_1 = __importDefault(require("../database/database"));
class UsuarioController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield usuarioDAO_1.default.getUserAdmin();
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    obtenerUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // se obtienen los datos del body
                var { idUsuario } = req.params;
                const result = yield usuarioDAO_1.default.getOnlyUser(parseInt(idUsuario));
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    insertar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Se obtiene los datos de la peticion
                const _a = req.body, { name, lastName, username, password, email, street, district, state, city, zipcode, phone } = _a, rest = __rest(_a, ["name", "lastName", "username", "password", "email", "street", "district", "state", "city", "zipcode", "phone"]);
                //Se valida la informacion en caso de no venir algun campo vacio se envia mensaje de error
                let respuestaBd = yield usuarioDAO_1.default.signUpUser(name, lastName, username, email, password, street, district, state, city, zipcode, phone);
                if (respuestaBd.codigo == 0) {
                    return res.json({ message: respuestaBd.mensaje, code: respuestaBd.codigo });
                }
                else {
                    return res.status(500).json({ message: respuestaBd.mensaje, code: respuestaBd.codigo });
                }
            }
            catch (error) {
                return res.status(500).json({ message: "Ocurrio un error", code: 1 });
            }
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombres, apellidos, username, password, email, calle, colonia, ciudad, telefono, idRol } = req.body;
            if (!(nombres && apellidos && username && password && email && calle && colonia && ciudad && telefono && idRol && idUsuario)) {
                return res.status(400).json({ message: 'Todos los campos son requeridos' });
            }
            // se obtienen los datos del body
            var { idUsuario } = req.params;
            const lstUsers = yield usuarioDAO_1.default.getOnlyUser(parseInt(idUsuario));
            if (lstUsers.length <= 0) {
                return res.status(404).json({ message: "No es posible llevar acabo lo requerido" });
            }
            for (let usuario of lstUsers) {
                if (usuario.idUsuario == idUsuario) {
                    let passwordHash = yield bcryptjs_1.default.hash(password, 8);
                    try {
                        (yield database_1.default).query('UPDATE tusuario set password = ?, nombres = ?, apellidos = ?, username = ?, email = ?, calle = ?, colonia = ?, ciudad = ?, telefono = ?, idRol = ? WHERE idUsuario = ?', [passwordHash, nombres, apellidos, username, email, calle, colonia, ciudad, telefono, idRol, idUsuario,]);
                    }
                    catch (error) {
                        return res.status(401).json({ message: 'Algo sucedio' });
                    }
                    res.json({ message: 'El usuario a sido actualizado!' });
                }
                else {
                    return res.status(500).json({ message: "Algo ocurrio: Error del servidor" });
                }
            }
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // se obtienen los datos del body
            var { idUsuario } = req.params;
            if (!(idUsuario)) {
                return res.status(400).json({ message: 'Se requiere de un ID' });
            }
            const lstUsers = yield usuarioDAO_1.default.getOnlyUser(parseInt(idUsuario));
            if (lstUsers.length <= 0) {
                return res.status(404).json({ message: "No es posible llevar acabo lo requerido" });
            }
            for (let usuario of lstUsers) {
                if (usuario.idUsuario == idUsuario) {
                    try {
                        (yield database_1.default).query('DELETE FROM tusuario WHERE idUsuario = ?', [idUsuario,]);
                    }
                    catch (error) {
                        return res.status(401).json({ message: 'Algo sucedio' });
                    }
                    res.json({ message: 'El usuario a sido eliminado' });
                }
                else {
                    return res.status(500).json({ message: "Algo ocurrio: Error del servidor" });
                }
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
function idUsuario(idUsuario) {
    throw new Error('Function not implemented.');
}
