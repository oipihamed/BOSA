export interface Producto {
    nombre: string;
    descripcion: string;
    cantidadExostencia:number;
    precio:number;
    rutaImagen:File;
    categoria:number;
}

export interface ProductoResponse { 
    message: string;
    code:number;
}