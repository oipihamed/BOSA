import { Request, Response } from "express";
import dao from "../dao/authDAO";
import jwt from 'jsonwebtoken';
import keySecret from "../config/keySecret";

class AuthController {
   public async iniciarSesion(req:Request, res:Response) {
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
           // Se verifican que los campos no este vacios
           if (username.trim() === "" || password.trim() === ""){
            return res.status(400).json({message : "Todos los campos son requeridos", code : 1});
           }
        //return res.json({username,password});
           //Obtener los datos del usuario
           const lstUsers = await dao.getUserByUsername(username);
           if (lstUsers.length <=0){
               return res.status(404).json({message: "El usuario y/o contraseña es incorrecto"});
           } 
           for(let usuario of lstUsers){
            if (usuario.password == password) {
                const {password, fechaRegistro, ... newUser} = usuario;

                var token = jwt.sign(newUser, keySecret.keys.secret, { expiresIn: '1h'});

                return res.json ({ message:"Autenticación Correcta",  token, code:0});
            }else{
                return res.status(404).json({message: "El usuario y/o contraseña es incorrecto"});
            }
           }

       } catch (error) {
           return res.status(500).json({message: "Ocurrio un error", code:1})
       }
   }
}
export const authController = new AuthController();