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
exports.productoController = void 0;
const productoDAO_1 = __importDefault(require("../dao/productoDAO"));
class ProductoController {
    listar(req, res) {
        res.json({ message: "listar" });
    }
    insertarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Se obtiene los datos de la peticion
                const _a = req.body, { nombre, descripcion, cantidad, precio, categoria, rutaImagen } = _a, rest = __rest(_a, ["nombre", "descripcion", "cantidad", "precio", "categoria", "rutaImagen"]);
                //Se valida la informacion en caso de no venir algun campo vacio se envia mensaje de error
                if (!nombre || !descripcion || !cantidad || !precio || !categoria) {
                    return res.status(400).json({ message: "Todos los campos son requeridos 1", code: 1 });
                }
                // Se verifican que los campos no este vacios
                if (nombre.trim() === "" || descripcion.trim() === "") {
                    return res.status(400).json({ message: "Todos los campos son requeridos 2", code: 1 });
                }
                console.log(rutaImagen);
                let respuestaBd = yield productoDAO_1.default.addProduct(nombre, descripcion, cantidad, precio, categoria, rutaImagen);
                console.log(respuestaBd);
                if (respuestaBd.codigo == 0) {
                    console.log(respuestaBd.mensaje);
                    return res.json({ message: respuestaBd.mensaje, code: respuestaBd.codigo });
                }
                else {
                    console.log(respuestaBd.mensaje);
                    return res.status(404).json({ message: respuestaBd.mensaje, code: respuestaBd.codigo });
                }
            }
            catch (error) {
                console.log(error);
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
exports.productoController = new ProductoController();
