export interface Book{
    id:number;
    titulo:string;
    autor:string;
    descripcion:string;
    imagen:string;
    categoria:string
}

export interface AgregarLibro{
    titulo:string;
    autor:string;
    descripcion:string;
    imagen: string;
    categoria: string;
}

export interface BookResponse{
    book:Book;
    message:string;
}

export interface BookListResponse{
    books:Book[];
    total:number;
}