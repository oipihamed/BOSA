export interface User {
    username: string;
    password: string;
}
export interface UserSignUp{
    name:string;
    lastname:string;
    username:string;
    email:string;
    password:string;
    street:string;
    district:string;
    state:number;
    city:number;
    zipcode:number;
    number:string;
}
export interface UserResponse { 
    message: string;
    token: string;
    code: number;
    idRol:string;
}