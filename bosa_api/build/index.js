"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
console.log("Hola mundo");
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const categoriaRoutes_1 = __importDefault(require("./routes/categoriaRoutes"));
var port = process.env.PORT || 3000;
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json({ limit: '25mb' }));
        this.app.use(express_1.default.urlencoded({ extended: false, limit: '25mb' }));
    }
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/usuarios", (req, res) => { res.json({ "mensaje": "LISTA DE USUARIOS" }); });
        this.app.use("/api/auth", authRoutes_1.default);
        this.app.use("/api/user", usuarioRoutes_1.default);
        this.app.use("/api/producto", productoRoutes_1.default);
        this.app.use("/api/categoria", categoriaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
