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
        this.columnas = "(nombre,descripcion,cantidadExistencia,precio,estatusOferta,idCategoria)";
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
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query("Select idProducto,nombre,descripcion,cantidadExistencia,precio,estatusOferta,idCategoria,(select rutaImagen from cimagen c where c.idProducto=tp.idProducto LIMIT 1) as rutaImagen from tproducto tp");
                }));
                return result;
            }
            catch (err) {
                console.log(err);
                return { "error": "error" };
            }
        });
    }
    //Insertar Producto
    addProduct(nombre, descripcion, cantidad, precio, categoria, rutaImagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //var dirname=process.cwd();
                //var dir=dirname.split('\\');
                //dirname=dir.join('/');
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query(`INSERT INTO tproducto ${this.columnas} values ('${nombre}','${descripcion}',${cantidad},${precio},1,${categoria})`);
                }));
                if (result.affectedRows != 0) {
                    var query = `INSERT INTO cimagen ${this.imagencol} values `;
                    rutaImagen.forEach(e => {
                        query += `('${e}',${result.insertId}),`;
                    });
                    query = query.substring(0, query.length - 1);
                    query += `;`;
                    const resultImg = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                        return yield connection.query(query);
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
    //Fin insertar producto
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
    //Eliminar producto
    eliminar(idProducto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query(" DELETE FROM tproducto WHERE idProducto = ? ", [idProducto]);
            }));
            return result;
        });
    }
    //Actualizar producto
    actualizar(producto, idProducto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(producto);
                const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query(
                    // " UPDATE tproducto SET ? WHERE idProducto = ? ", [producto, idProducto]);
                    "UPDATE tproducto SET ? where  idProducto = ?", [producto, idProducto]);
                }));
                if (result.affectedRows != 0) {
                    return { codigo: 0, mensaje: "Actualizado correctamente" };
                }
                else {
                    return { codigo: 1, mensaje: "No se ha actualizado" };
                }
            }
            catch (error) {
                return { codigo: 1, mensaje: error };
            }
        });
    }
    actualizarImagen(rutaImagen, idProducto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var query = `INSERT INTO cimagen ${this.imagencol} values `;
                rutaImagen.forEach(e => {
                    query += `('${e}',${idProducto}),`;
                });
                query = query.substring(0, query.length - 1);
                query += `;`;
                console.log(query);
                const resultDel = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                    return yield connection.query(" DELETE FROM cimagen WHERE idProducto = ? ", [idProducto]);
                }));
                if (resultDel.affectedRows != 0) {
                    const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                        return yield connection.query(query);
                    }));
                    if (result.affectedRows != 0) {
                        return { codigo: 0, mensaje: "Actualizado correctamente" };
                    }
                    else {
                        return { codigo: 1, mensaje: "No se ha actualizado" };
                    }
                }
                else {
                    return { codigo: 1, mensaje: "No se ha actualizado" };
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
