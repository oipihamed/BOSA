import { query } from 'express';
import { Connection } from 'promise-mysql';
import pool from '../database/database';
class AuthDAO{
    public async getUserByUsername(username: string){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select* from tusuario WHERE username=?", [username]
            )
        });
        return result;
    }

    public async getUserByResetToken(resetToken: string){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select* from tusuario WHERE resetToken=?", [resetToken]
            )
        });
        return result;
    }
}
const dao= new AuthDAO();
export default dao;