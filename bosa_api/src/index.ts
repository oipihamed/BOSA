import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
console.log("Hola mundo");
import indexRoutes from './routes/indexRoutes';
import authRoutes from './routes/authRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import productoRoutes from './routes/productoRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
var port = process.env.PORT || 3000;
 class Server{
    public app: Application;
    constructor(){
       this.app=express(); 
       this.config();
       this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json({limit:'25mb'}));
        this.app.use(express.urlencoded({extended:false,limit:'25mb'}));

    }

    routes():void{
        this.app.use("/", indexRoutes);
        this.app.use("/api/usuarios", (req, res) => {res.json({"mensaje":"LISTA DE USUARIOS"})});
        this.app.use("/api/auth", authRoutes);
        this.app.use("/api/user", usuarioRoutes);
        this.app.use("/api/producto",productoRoutes);
        this.app.use("/api/categoria",categoriaRoutes);
    }
    
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("Server on port",this.app.get('port'));
        })
    }
 }
const server= new Server();
server.start();
