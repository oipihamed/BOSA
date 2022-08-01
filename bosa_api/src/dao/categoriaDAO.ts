import { query } from 'express';
import { Connection } from 'promise-mysql';
import pool from '../database/database';

class CategoriaDAO{

    //Para obtener las categorias
    public async getCategorias(){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select * from ccategoria LIMIT 0, 4"
            )
        });
        return result;
    }

    //Para obtener una Categoria
    public async getCategoria(idCategoria: number){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "SELECT * FROM ccategoria cc INNER JOIN tproducto tp on cc.idCategoria = tp.idCategoria INNER JOIN cimagen ci on tp.idProducto = ci.idProducto where cc.idCategoria = ? ", [idCategoria]
            );
        });
        return result;
    }

}

const dao= new CategoriaDAO();
export default dao;
