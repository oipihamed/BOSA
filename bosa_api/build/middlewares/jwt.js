"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const checkJwt = (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        next();
    }
    catch (error) {
        return res.status(401).send("No esta autorizado");
    }
};
exports.checkJwt = checkJwt;
