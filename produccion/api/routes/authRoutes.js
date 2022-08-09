"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Login
        this.router.post('/', authControllers_1.authController.iniciarSesion);
        //Forgot Password
        this.router.put('/forgot-password', authControllers_1.authController.forgotPassword);
        //Create new Password
        this.router.put('/new-password/', authControllers_1.authController.createNewPassword);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
