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
exports.categoriaController = void 0;
const categoriaDAO_1 = __importDefault(require("../dao/categoriaDAO"));
class CategoriaController {
    //listar las categorias
    listarCategorias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield categoriaDAO_1.default.getCategorias();
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    //listar una categoria
    listarUnaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // se obtienen los datos del body
                var { idCategoria } = req.params;
                const result = yield categoriaDAO_1.default.getCategoria(parseInt(idCategoria));
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    insertar(req, res) {
        res.json({ message: "insertar" });
    }
    actualizar(req, res) {
        res.json({ message: "actulizar" });
    }
    eliminar(req, res) {
        res.json({ message: "eliminar" });
    }
}
exports.categoriaController = new CategoriaController();
