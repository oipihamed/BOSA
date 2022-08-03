import { Router } from "express";
import { checkJwt } from "../middlewares/jwt";
import { authController } from "../controllers/authControllers";

class AuthRoutes  {
  public router: Router;
  constructor(){
      this.router=Router();
      this.config();
  } 
  config (){
      // Login
      this.router.post('/', authController.iniciarSesion);

      //Forgot Password
      this.router.put('/forgot-password', authController.forgotPassword);

      //Create new Password
      this.router.put('/new-password/', authController.createNewPassword);

  }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;