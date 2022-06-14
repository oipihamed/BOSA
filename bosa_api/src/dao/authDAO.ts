import { query } from 'express';
import { Connection } from 'promise-mysql';
import pool from '../database/database';
class AuthDAO{
    public getUserByUsername(username: string){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select* from tbl_usuario WHERE username=?", [username]
            )
        })
    }
}
const dao= new AuthDAO();
export default dao;