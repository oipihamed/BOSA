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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class UsuarioDAO {
    constructor() {
        this.columnas = "(nombres,apellidos,username,password,email,fechaRegistro,calle,colonia,ciudad,telefono,idRol)";
    }
    signUpUser(name, lastName, username, email, password, street, district, state, city, zipcode, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var bResult = true;
                const now = new Date();
                console.log(now.toLocaleDateString());
                if (name == null || lastName == null || username == null || email == null
                    || password == null || street == null || district == null || state == null
                    || city == null || zipcode == null)
                    return { mensaje: "Todos los campos son requeridos", code: 1 };
                console.log(lastName);
                const usernameBd = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query("Select* from tusuario WHERE username=?", [username]);
                }));
                const emailBd = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query("Select* from tusuario WHERE email=?", [email]);
                }));
                if (usernameBd != "" && emailBd != "")
                    return { mensaje: "Username o email no disponibles", code: 1 };
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query(
                    //                `INSERT INTO tusuario ${this.columnas} values ('${name}','${lastName}','${username}','${password}','${email}','${now.toLocaleDateString()}','${street}','${district}','${state}','${city}','${zipcode}','${phone}',1)`
                    `INSERT INTO tusuario ${this.columnas} values ('${name}','${lastName}','${username}','${password}','${email}','${now.toLocaleDateString()}','${street}','${district}','${city}','${phone}',1)`);
                }));
                if (result.affectedRows != 0) {
                    // const user = await pool.then(async (connection) => {
                    //     return await connection.query(
                    //         "Select* from tusuario WHERE idUsuario=?", [username]
                    //     )
                    // });
                    return { mensaje: "Se ha registrado correctamente", codigo: 0 };
                    ;
                }
                else {
                    return { mensaje: "Error al insertar", codigo: 1 };
                }
            }
            catch (error) {
                return { mensaje: error, codigo: 1 };
            }
        });
    }
}
const dao = new UsuarioDAO();
exports.default = dao;
