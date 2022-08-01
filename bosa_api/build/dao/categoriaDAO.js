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
class CategoriaDAO {
    //Para obtener las categorias
    getCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("Select * from ccategoria LIMIT 0, 4");
            }));
            return result;
        });
    }
    //Para obtener una Categoria
    getCategoria(idCategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT * FROM ccategoria cc INNER JOIN tproducto tp on cc.idCategoria = tp.idCategoria INNER JOIN cimagen ci on tp.idProducto = ci.idProducto where cc.idCategoria = ? ", [idCategoria]);
            }));
            return result;
        });
    }
}
const dao = new CategoriaDAO();
exports.default = dao;
