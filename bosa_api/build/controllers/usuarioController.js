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
class UsuarioController {
    listar(req, res) {
        res.json({ message: "listar" });
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
        res.json({ message: "actulizar" });
    }
    eliminar(req, res) {
        res.json({ message: "eliminar" });
    }
}
exports.usuarioController = new UsuarioController();
