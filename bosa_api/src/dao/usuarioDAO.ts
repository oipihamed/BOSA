import pool from "../database/database";
import bcryptjs from "bcryptjs";

class UsuarioDAO {
    private columnas = "(nombres,apellidos,username,password,email,fechaRegistro,calle,colonia,ciudad,telefono,idRol)";

    public async signUpUser(name: string, lastName: string, username: string, email: string,
        password: string, street: string, district: string, state: string, city: string, zipcode: string, phone: string) {
        try {
        var bResult = true;
        const now = new Date();
        console.log(now.toLocaleDateString());
        if (name == null || lastName == null || username == null || email == null
            || password == null || street == null || district == null || state == null
            || city == null || zipcode == null) return { mensaje: "Todos los campos son requeridos", code: 1 };
            console.log(lastName)
        const usernameBd = await pool.then(async (connection) => {
            return await connection.query(
                "Select * from tusuario WHERE username=?", [username]
            )
        });
        const emailBd = await pool.then(async (connection) => {
            return await connection.query(
                "Select * from tusuario WHERE email=?", [email]
            )
        });
        if (usernameBd != "" && emailBd != "") return { mensaje: "Username o email no disponibles", code: 1 };
        const result = await pool.then(async (connection) => {
            let passwordHash = await bcryptjs.hash(password, 8)
            return await connection.query(
//                `INSERT INTO tusuario ${this.columnas} values ('${name}','${lastName}','${username}','${password}','${email}','${now.toLocaleDateString()}','${street}','${district}','${state}','${city}','${zipcode}','${phone}',1)`
                `INSERT INTO tusuario ${this.columnas} values ('${name}','${lastName}','${username}','${passwordHash}','${email}','${now.toLocaleDateString()}','${street}','${district}','${city}','${phone}',1)`
            )

        });
        if (result.affectedRows != 0) {
            // const user = await pool.then(async (connection) => {
            //     return await connection.query(
            //         "Select* from tusuario WHERE idUsuario=?", [username]
            //     )
            // });
            return { mensaje: "Se ha registrado correctamente", codigo: 0 };;
        } else {
            return { mensaje: "Error al insertar", codigo: 1 };
        }
    } catch (error) {
    return {mensaje:error,codigo:1}
    }
    }

}
const dao = new UsuarioDAO();
export default dao;