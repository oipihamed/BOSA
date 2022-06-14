"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
class UsuarioController {
    listar(req, res) {
        res.json({ message: "listar" });
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
exports.usuarioController = new UsuarioController();
