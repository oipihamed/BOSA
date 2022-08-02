export interface Producto {
    idProducto:string|null;
    nombre: string|null;
    descripcion: string|null;
    cantidadExostencia:string|null;
    precio:string|null;
    rutaImagen:string|null;
    categoria:string|null;
}

export interface ProductoResponse { 
    message: string;
    code:number;
}