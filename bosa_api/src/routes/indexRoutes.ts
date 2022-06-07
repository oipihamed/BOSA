import { Router } from "express";
import {indexController} from '../controllers/indexController';

class IndexRoutes {
    public router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.listar);
        this.router.post('/', indexController.create);
        this.router.put('/', indexController.update);
        this.router.delete('/', indexController.delete);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;