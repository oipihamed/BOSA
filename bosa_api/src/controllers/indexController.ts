import { Request, Response } from "express";
import { Connection } from "promise-mysql";
import pool from "../database/database";

class IndexController {

        public async listar(req:Request, res: Response) {
            try {

                const result = await pool.then(async (Connection) => {
                    return await Connection.query("SHOW SCHEMAS");

                });

                console.log(result);

                return res.json({message:"Lista Respuesta desde otro metodo"});
            }catch (error:any) {
                return res.status(500).json({error: error.message});
            }
         }

        public create(): void { }

        public update(): void { }

        public delete(): void { }



}
export const indexController = new IndexController();