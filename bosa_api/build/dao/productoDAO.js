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
class ProductoDAO {
    constructor() {
        this.columnas = "(nombre,descripcion,cantidadExistencia,precio,estatus,idCategoria)";
        this.imagencol = "(rutaImagen,idProducto)";
        this.resultIm = false;
        this.sMensajeError = "";
    }
    //Para obtener todos los productos
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("Select * from tproducto tp INNER JOIN cimagen ci on tp.idProducto = ci.idProducto LIMIT 0, 3");
            }));
            return result;
        });
    }
    //Para obtener todos los productos EN OFERTA
    getProductsOfer() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("Select * from tproducto tp INNER JOIN cimagen ci on tp.idProducto = ci.idProducto WHERE estatusOferta = 1 ORDER BY RAND() LIMIT 0, 3;");
            }));
            return result;
        });
    }
    //Para obtener solo 1 Producto
    getProducto(idProducto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("Select * from tproducto tp INNER JOIN cimagen ci on tp.idProducto = ci.idProducto WHERE tp.idProducto = ? ", [idProducto]);
            }));
            return result;
        });
    }
    addProduct(nombre, descripcion, cantidad, precio, categoria, rutaImagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query(`INSERT INTO tproducto ${this.columnas} values ('${nombre}','${descripcion}',${cantidad},${precio},1,${categoria})`);
                }));
                if (result.affectedRows != 0) {
                    const resultImg = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                        return yield connection.query(`INSERT INTO cimagen ${this.imagencol} values ('${rutaImagen}',${result.insertId});`);
                    }));
                    if (resultImg.affectedRows != 0) {
                        this.resultIm = true;
                    }
                }
                if (this.resultIm) {
                    return { codigo: 0, mensaje: "Insertado correctamente" };
                }
                else {
                    return { codigo: 1, mensaje: "No se ha insertado" };
                }
            }
            catch (error) {
                return { codigo: 1, mensaje: error };
            }
        });
    }
}
const dao = new ProductoDAO();
exports.default = dao;
