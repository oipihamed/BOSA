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
const validator_1 = __importDefault(require("validator"));
class ProductoController {
    //listar tres productos
    listarProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield productoDAO_1.default.getProducts();
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    //listar todos los productos
    listarAllProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield productoDAO_1.default.getAllProducts();
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    //listar todos los productos en Oferta
    listarProductosOferta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield productoDAO_1.default.getProductsOfer();
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    //listar un producto
    listarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // se obtienen los datos del body
                var { idProducto } = req.params;
                const result = yield productoDAO_1.default.getProducto(parseInt(idProducto));
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    //listar un imagenes de un producto
    listarImgProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("dentro de lista img");
                // se obtienen los datos del body
                const { idProducto } = req.params;
                if (validator_1.default.isEmpty(idProducto.trim())) {
                    return res.status(400);
                }
                const result = yield productoDAO_1.default.getAllImgPro(idProducto);
                res.json(result);
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    //Insertar productos
    insertarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Se obtiene los datos de la peticion
                const _a = req.body, { nombre, descripcion, cantidad, precio, categoria, rutaImagen } = _a, rest = __rest(_a, ["nombre", "descripcion", "cantidad", "precio", "categoria", "rutaImagen"]);
                let img = [];
                //Se valida la informacion en caso de no venir algun campo vacio se envia mensaje de error
                if (!nombre || !descripcion || !cantidad || !precio || !categoria || !rutaImagen) {
                    return res.status(400).json({ message: "Todos los campos son requeridos 1", code: 1 });
                }
                // Se verifican que los campos no este vacios
                if (nombre.trim() === "" || descripcion.trim() === "" || rutaImagen.trim() === "") {
                    return res.status(400).json({ message: "Todos los campos son requeridos 2", code: 1 });
                }
                img = rutaImagen.split('$$');
                var rutasImagen = [];
                //Cargar imagenes en servidor
                img.forEach((r) => {
                    rutasImagen.push(uploadImg(r));
                });
                let respuestaBd = yield productoDAO_1.default.addProduct(nombre, descripcion, cantidad, precio, categoria, rutasImagen);
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
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // se obtienen los datos del body
                var producto = req.body;
                var img = [];
                // validar que los datos no sean nulos o indefinidos
                if (!producto.idProducto
                    || !producto.nombre
                    || !producto.descripcion
                    || !producto.cantidadExostencia
                    || !producto.precio
                    || !producto.categoria) {
                    return res.status(404).json({ message: "Todos los datos son requeridos", code: 1 });
                }
                // se verifica que los datos no se encuentren vacios
                if (producto.idProducto == '0'
                    || validator_1.default.isEmpty(producto.nombre.trim())
                    || validator_1.default.isEmpty(producto.descripcion.trim())
                    || producto.categoria == '0') {
                    return res.status(404).json({ message: "Todos los datos son requeridos", code: 1 });
                }
                const newProduct = {
                    nombre: producto.nombre.trim(),
                    descripcion: producto.descripcion.trim(),
                    precio: producto.precio,
                    cantidadExistencia: producto.cantidadExostencia,
                    idCategoria: producto.categoria
                };
                var respuestaBd;
                respuestaBd = yield productoDAO_1.default.actualizar(newProduct, producto.idProducto);
                if (!validator_1.default.isEmpty(producto.rutaImagen.trim()) || producto.rutaImagen.includes('$$')) {
                    img = producto.rutaImagen.split('$$');
                    var rutasImagen = [];
                    //Cargar imagenes en servidor
                    img.forEach((r) => {
                        rutasImagen.push(uploadImg(r));
                    });
                    if (!rutasImagen.includes("0")) {
                        respuestaBd = yield productoDAO_1.default.actualizarImagen(rutasImagen, producto.idProducto);
                    }
                }
                // actualización de los datos
                // respuestaBd = await dao.actualizar(newProduct, producto.idProducto);
                if (respuestaBd != null) {
                    if (respuestaBd.codigo == 0) {
                        console.log(respuestaBd.mensaje);
                        return res.json({ message: respuestaBd.mensaje, code: respuestaBd.codigo });
                    }
                    else {
                        console.log(respuestaBd.mensaje);
                        return res.status(404).json({ message: respuestaBd.mensaje, code: respuestaBd.codigo });
                    }
                }
                else {
                    return res.status(404).json({ message: "No se ha realizado la peticion a la Base de datos", code: 1 });
                }
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    //Eliminar productos
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // se obtienen los datos del body
                var { idProducto } = req.params;
                // validar que los datos no sean nulos o indefinidos
                if (!idProducto) {
                    return res.status(404).json({ message: "Todos los datos son requeridos", code: 1 });
                }
                // se verifica que los datos no se encuentren vacios
                if (validator_1.default.isEmpty(idProducto.trim())) {
                    return res.status(404).json({ message: "Todos los datos son requeridos", code: 1 });
                }
                // actualización de los datos
                const result = yield productoDAO_1.default.eliminar(parseInt(idProducto));
                if (result.affectedRows > 0) {
                    return res.json({ message: "Los datos se eliminaron correctamente", code: 0 });
                }
                else {
                    return res.status(404).json({ message: result.message, code: 1 });
                }
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
}
function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var response = { type: matches[1], data: new Buffer(matches[2], 'base64') };
    return response;
}
function uploadImg(rutaImagen) {
    try {
        console.log(rutaImagen.includes("assets/images/"));
        if (rutaImagen.includes("assets/images/")) {
            return rutaImagen;
        }
        var base64DataD = rutaImagen.replace(/^data:image\/png;base64,/, "");
        // Regular expression for image type:
        // This regular image extracts the "jpeg" from "image/jpeg"
        var imageTypeRegularExpression = /\/(.*?)$/;
        // Generate random string
        var crypto = require('crypto');
        var seed = crypto.randomBytes(20);
        var uniqueSHA1String = crypto
            .createHash('sha1')
            .update(seed)
            .digest('hex');
        var base64Data = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/4Q3zaHR0cDovL25zLmFkb2JlLmN...';
        var imageBuffer = decodeBase64Image(base64Data);
        var userUploadedFeedMessagesLocation = '../bosa_app/src/assets/images/';
        var uniqueRandomImageName = 'image-' + uniqueSHA1String;
        // This variable is actually an array which has 5 values,
        // The [1] value is the real image extension
        var imageTypeDetected = imageBuffer.type
            .match(imageTypeRegularExpression);
        var userUploadedImagePath = userUploadedFeedMessagesLocation +
            uniqueRandomImageName +
            '.' +
            imageTypeDetected[1];
        require("fs").writeFile(userUploadedImagePath, base64DataD, 'base64', function (err) {
        });
        return "assets/images/" + uniqueRandomImageName + ".jpg";
    }
    catch (err) {
        return "0";
    }
}
exports.productoController = new ProductoController();
