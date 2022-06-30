import { query } from 'express';
import { Connection } from 'promise-mysql';
import pool from '../database/database';
class ProductoDAO{
    private columnas:string ="(nombre,descripcion,cantidadExistencia,precio,estatus,idCategoria)";
    private imagencol:string="(rutaImagen,idProducto)";
    public resultIm:Boolean=false;
    private sMensajeError="";
    public async getProducts(){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select * from tproducto"
            )
        });
        return result;
    }
    public async addProduct(nombre:string,descripcion:string,cantidad:number,precio:number,categoria:string,rutaImagen:string){
    try {
            
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                `INSERT INTO tproducto ${this.columnas} values ('${nombre}','${descripcion}',${cantidad},${precio},1,${categoria})`
            )
                
        });
       if(result.affectedRows!=0){
         const resultImg=await pool.then(async(connection)=>{
                    return await connection.query(
                        `INSERT INTO cimagen ${this.imagencol} values ('${rutaImagen}',${result.insertId});`
                   );
                  
                });
       if(resultImg.affectedRows!=0){
         this.resultIm=true;
       }
       }
    if(this.resultIm){
        return {codigo:0,mensaje:"Insertado correctamente"}
    }else{
        return  {codigo:1,mensaje:"No se ha insertado"}
    }
    } catch (error) {
        return {codigo:1,mensaje:error}
    }     
    }
}
const dao= new ProductoDAO();
export default dao;