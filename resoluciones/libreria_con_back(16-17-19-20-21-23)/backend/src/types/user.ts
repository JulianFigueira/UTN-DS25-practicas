export interface User{
    id:number;
    mail: string;
    contrasena:string
}

export interface CreateUser{
    mail: string;
    contrasena:string
}

export interface UserResponse{
    id: number;
    mail: string;
}

export interface UserListResponse{
    users:UserResponse[];
    total:number;
    message?: string;
}