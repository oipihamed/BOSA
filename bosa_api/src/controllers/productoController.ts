import { Request , Response} from 'express';
import dao from '../dao/productoDAO';

class ProductoController{
     //listar todos los productos
    public async listarProductos(req: Request, res: Response) {
        try {

            const result = await dao.getProducts();

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
    }

    //listar todos los productos en Oferta
    public async listarProductosOferta(req: Request, res: Response) {
        try {

            const result = await dao.getProductsOfer();

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
    }

    //listar un producto
    public async listarProducto(req: Request, res: Response) {
        try {
            // se obtienen los datos del body
            var { idProducto } = req.params;

            const result = await dao.getProducto(parseInt(idProducto));

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
    }

    public async insertarProducto(req: Request, res: Response) {
       try {
         //Se obtiene los datos de la peticion
         const {nombre, descripcion,cantidad,precio,categoria, rutaImagen, ...rest}= req.body;
         //Se valida la informacion en caso de no venir algun campo vacio se envia mensaje de error
         if(!nombre || !descripcion || !cantidad|| !precio ||!categoria){
             return res.status(400).json({message : "Todos los campos son requeridos 1", code : 1});
         }
           // Se verifican que los campos no este vacios
           if (nombre.trim() === "" || descripcion.trim() === ""){
             return res.status(400).json({message : "Todos los campos son requeridos 2", code : 1});
            }
            console.log(rutaImagen);
            let respuestaBd= await dao.addProduct(nombre,descripcion,cantidad,precio,categoria,rutaImagen);
            console.log(respuestaBd); 
            if (respuestaBd.codigo==0 ) {
                console.log(respuestaBd.mensaje);
                    return res.json ({ message:respuestaBd.mensaje, code:respuestaBd.codigo});
                }else{
                    console.log(respuestaBd.mensaje);
                    return res.status(404).json({message:respuestaBd.mensaje,code:respuestaBd.codigo});
                }
       } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Ocurrio un error", code:1})
       }
       
    }

    public actualizar(req: Request, res: Response) { 
        res.json({ message : "actulizar"})
    }

    public eliminar(req: Request, res: Response) { 
        res.json({ message : "eliminar"})
    }
}
export const productoController = new ProductoController();