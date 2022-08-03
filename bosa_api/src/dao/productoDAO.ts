import e, { query } from 'express';
import { Connection } from 'promise-mysql';
import pool from '../database/database';
class ProductoDAO{
    private columnas:string ="(nombre,descripcion,cantidadExistencia,precio,estatusOferta,idCategoria)";
    private imagencol:string="(rutaImagen,idProducto)";
    public resultIm:Boolean=false;
    private sMensajeError="";

    //Para obtener todos los productos
    public async getProducts(){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select * from tproducto tp INNER JOIN cimagen ci on tp.idProducto = ci.idProducto LIMIT 0, 3"
            )
        });
        return result;
    }
    public async getAllProducts(){
        try{
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select idProducto,tp.nombre,tp.descripcion,cantidadExistencia,precio,estatusOferta,cc.nombre as nombreCategoria,tp.idCategoria,(select rutaImagen from cimagen c where c.idProducto=tp.idProducto LIMIT 1) as rutaImagen from tproducto tp INNER JOIN ccategoria cc on tp.idCategoria=cc.idCategoria"
            )
        });
        return result;}catch(err){
            console.log(err)
            return {"error":"error"}
        }
    }
    public async getAllImgPro(idProducto:string){
        try{
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                `SELECT rutaImagen FROM cimagen WHERE idProducto=? LIMIT 3`,[idProducto]
            )
        });
        return result;
    }catch(err){
            console.log(err)
            return {"error":"error"}
        }
    }
//Insertar Producto
public async addProduct(nombre:string,descripcion:string,cantidad:number,precio:number,categoria:string,rutaImagen:string[]){
    try {
        //var dirname=process.cwd();
        //var dir=dirname.split('\\');
        //dirname=dir.join('/');
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                `INSERT INTO tproducto ${this.columnas} values ('${nombre}','${descripcion}',${cantidad},${precio},1,${categoria})`
            )
                
        });
       if(result.affectedRows!=0){
        var query=`INSERT INTO cimagen ${this.imagencol} values `;
        rutaImagen.forEach(e => {
            query+=`('${e}',${result.insertId}),`
             });
             query=query.substring(0, query.length - 1);
             query+=`;`;
             
         const resultImg=await pool.then(async(connection)=>{
                    return await connection.query(query
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
//Fin insertar producto
    //Para obtener todos los productos EN OFERTA
    public async getProductsOfer(){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select * from tproducto tp INNER JOIN cimagen ci on tp.idProducto = ci.idProducto WHERE estatusOferta = 1 ORDER BY RAND() LIMIT 0, 3;"
            )
        });
        return result;
    }

    //Para obtener solo 1 Producto
    public async getProducto(idProducto: number){
        const result = await pool.then(async(connection)=>{
            return await connection.query(
                "Select * from tproducto tp INNER JOIN cimagen ci on tp.idProducto = ci.idProducto WHERE tp.idProducto = ? ", [idProducto]);
        });
        return result;
    }
//Eliminar producto
public async eliminar(idProducto: number) {
    const result = await pool.then( async (connection) => {
        return await connection.query(
            " DELETE FROM tproducto WHERE idProducto = ? ", [idProducto]);
    });
    return result;
}
  //Actualizar producto
  public async actualizar(producto: any, idProducto: number) {
    try {
        console.log(producto);
    const result = await pool.then( async (connection) => {
        return await connection.query(
           // " UPDATE tproducto SET ? WHERE idProducto = ? ", [producto, idProducto]);
          "UPDATE tproducto SET ? where  idProducto = ?",[producto,idProducto]);
    });
    if(result.affectedRows!=0){
        return {codigo:0,mensaje:"Actualizado correctamente"}
    }else{
        return  {codigo:1,mensaje:"No se ha actualizado"}
    }
}catch(error)
    {
        return {codigo:1,mensaje:error}
    }
} 
public async actualizarImagen(rutaImagen: string[], idProducto: number) {
    try {
        var query=`INSERT INTO cimagen ${this.imagencol} values `;
        rutaImagen.forEach(e => {
            query+=`('${e}',${idProducto}),`
             });
             query=query.substring(0, query.length - 1);
             query+=`;`;
             console.log(query);
             const resultDel=await pool.then(async(connection)=>{
                return await connection.query(" DELETE FROM cimagen WHERE idProducto = ? ", [idProducto]);
             });
             if(resultDel.affectedRows!=0){
         const result=await pool.then(async(connection)=>{
                    return await connection.query(query
                   );
                });
                if(result.affectedRows!=0){
                    return {codigo:0,mensaje:"Actualizado correctamente"}
                }else{
                    return  {codigo:1,mensaje:"No se ha actualizado"}
                }
            }else{
                return  {codigo:1,mensaje:"No se ha actualizado"}
            }
    
}catch(error)
    {
        return {codigo:1,mensaje:error}
    }
}
}
const dao= new ProductoDAO();
export default dao;