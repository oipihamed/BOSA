import { Request , Response} from 'express';
import dao from '../dao/productoDAO';
import validator from 'validator';

class ProductoController{
     //listar tres productos
    public async listarProductos(req: Request, res: Response) {
        try {

            const result = await dao.getProducts();

            res.json(result);
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
    }
  //listar todos los productos
  public async listarAllProductos(req: Request, res: Response) {
    try {

        const result = await dao.getAllProducts();

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
//Insertar productos
    public async insertarProducto(req: Request, res: Response) {
        try {
          //Se obtiene los datos de la peticion
          const {nombre, descripcion,cantidad,precio,categoria, rutaImagen, ...rest}= req.body;
          let img=[];
        
                   //Se valida la informacion en caso de no venir algun campo vacio se envia mensaje de error
          if(!nombre || !descripcion || !cantidad|| !precio ||!categoria|| !rutaImagen){
              return res.status(400).json({message : "Todos los campos son requeridos 1", code : 1});
          }
            // Se verifican que los campos no este vacios
            if (nombre.trim() === "" || descripcion.trim() === "" || rutaImagen.trim()===""){
              return res.status(400).json({message : "Todos los campos son requeridos 2", code : 1});
             }
 
             img=rutaImagen.split('$$');
             var rutasImagen: string[]=[];
             //Cargar imagenes en servidor
             img.forEach((r: any) => {
                 rutasImagen.push(uploadImg(r));
             });
             let respuestaBd= await dao.addProduct(nombre,descripcion,cantidad,precio,categoria,rutasImagen);
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

    public async actualizar(req: Request, res: Response) { 
        try {
            
            // se obtienen los datos del body
            var producto = req.body;
           
            // validar que los datos no sean nulos o indefinidos
            if (!producto.idProducto
                || !producto.nombre
                || !producto.descripcion
                || !producto.cantidadExostencia
                || !producto.precio
                || !producto.categoria) {
                    return res.status(404).json({ message: "Todos los datos son requeridos", code: 1});
            }

            // se verifica que los datos no se encuentren vacios
            if (producto.idProducto == '0'
                || validator.isEmpty(producto.nombre.trim())
                || validator.isEmpty(producto.descripcion.trim())
                || producto.categoria == '0') {
                    return res.status(404).json({ message: "Todos los datos son requeridos", code: 1});
            }
            const newProduct = {
                nombre: producto.nombre.trim(),
                descripcion: producto.descripcion.trim(),
                precio: producto.precio,
                cantidadExistencia: producto.cantidadExostencia,
                idCategoria:producto.categoria
            }
            // actualización de los datos
            const respuestaBd = await dao.actualizar(newProduct, producto.idProducto);
            if (respuestaBd.codigo==0 ) {
                console.log(respuestaBd.mensaje);
                    return res.json ({ message:respuestaBd.mensaje, code:respuestaBd.codigo});
                }else{
                    console.log(respuestaBd.mensaje);
                    return res.status(404).json({message:respuestaBd.mensaje,code:respuestaBd.codigo});
                }

        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
    }
//Eliminar productos
public async eliminar(req: Request, res: Response) {
    try {
        // se obtienen los datos del body
        var { idProducto } = req.params;

        // validar que los datos no sean nulos o indefinidos
        if (!idProducto) {
                return res.status(404).json({ message: "Todos los datos son requeridos", code: 1});
        }

        // se verifica que los datos no se encuentren vacios
        if (validator.isEmpty(idProducto.trim())) {
                return res.status(404).json({ message: "Todos los datos son requeridos", code: 1});
        }

        // actualización de los datos
        const result = await dao.eliminar(parseInt(idProducto));

        if (result.affectedRows > 0) {
            return res.json({message: "Los datos se eliminaron correctamente", code: 0});
        } else {
            return res.status(404).json({ message: result.message, code: 1});
        }

    } catch (error: any) {
        return res.status(500).json({ message : `${error.message}` });
    }
}
}
function decodeBase64Image(dataString: string) 
{
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var response = {type:matches![1],data:new Buffer(matches![2], 'base64')};

  return response;
}
function uploadImg(rutaImagen:string) {
    var base64DataD = rutaImagen.replace(/^data:image\/png;base64,/, "");
            // Regular expression for image type:
           // This regular image extracts the "jpeg" from "image/jpeg"
           var imageTypeRegularExpression      = /\/(.*?)$/;      
   
           // Generate random string
           var crypto                          = require('crypto');
           var seed                            = crypto.randomBytes(20);
           var uniqueSHA1String                = crypto
                                                  .createHash('sha1')
                                                   .update(seed)
                                                    .digest('hex');
   
           var base64Data = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/4Q3zaHR0cDovL25zLmFkb2JlLmN...';
   
           var imageBuffer                      = decodeBase64Image(base64Data);
           var userUploadedFeedMessagesLocation = '../bosa_app/src/assets/images/';
   
           var uniqueRandomImageName            = 'image-' + uniqueSHA1String;
           // This variable is actually an array which has 5 values,
           // The [1] value is the real image extension
         
           var imageTypeDetected                = imageBuffer.type
                                                    .match(imageTypeRegularExpression);
   
           var userUploadedImagePath            = userUploadedFeedMessagesLocation + 
                                                  uniqueRandomImageName +
                                                  '.' + 
                                                  imageTypeDetected![1];
   
           require("fs").writeFile(userUploadedImagePath,base64DataD, 'base64', function(err:any) {
              
           });
  return  "assets/images/"+uniqueRandomImageName+".jpg";
}
export const productoController = new ProductoController();