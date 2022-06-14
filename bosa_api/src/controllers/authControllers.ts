import { Request, Response } from "express";

class AuthController {
   public iniciarSesion(req:Request, res:Response) {
       try {
           //Se obtiene los datos del cuerpo de la peticion 
           const {username, password, ...rest}= req.body;
           //Se valida que no se reciban parametros no aceptados

           if(Object.keys(rest).length){
                return res.status(400).json({message : "La estructura no es correcta", code : 1});
           }

           //Validacion de Datos
           if(!username || !password){
               return res.status(400).json({message : "Todos los campos son requeridos", code : 1});
           }

           //Ob

           // Se verifican que los campos no este vacios
           if (username.trim() === "" || password.trim() === ""){
            return res.status(400).json({message : "Todos los campos son requeridos", code : 1});
           }
           return res.json({username,password});
       } catch (error) {
           return res.status(500).json({message: "Ocurrio un error", code:1})
       }
   }
}
export const authController= new AuthController();