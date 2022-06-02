import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
console.log("Hola mundo");
var port = process.env.PORT || 3000;
 class Server{
    public app: Application;
    constructor(){
       this.app=express(); 
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{}
    start():void{
        this.app.listen(port,()=>{
            console.log("Server on port",port);
        })
    }
 }
const server= new Server();
server.start();
