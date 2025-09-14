export interface Formulario{
    id:number,
    nombre: string,
    apellido: string
    fechanac: Date,
    mail: string,
    contraseña: string,
    sexo: boolean
}

export interface AgregarFormulario{
    nombre: string,
    apellido: string
    fechanac: Date,
    mail: string,
    contraseña: string,
    sexo: boolean
}

export interface FormularioResponse{
    formulario:Formulario;
    message:string;
}

export interface FormularioListResponse{
    formulario:Formulario[];
    total:number;
}