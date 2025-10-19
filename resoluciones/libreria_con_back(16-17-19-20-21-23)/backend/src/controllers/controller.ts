import { Request, Response , NextFunction} from 'express';
import * as bookService from '../services/Bookservices';

export async function getAllBooks(req: Request, res: Response,  next: NextFunction) {
  try {
    const books = await bookService.getAllBooks(); // Trae todos los libros
    res.json({
      success:true,
      data:books
    }); // Los manda al frontend
  } catch (error) {
    next(error);
  }
}

export async function createBook (req: Request, res: Response, next: NextFunction) {
  try {
     const newBook = await bookService.createBook(req.body);
      res.status(201).json({
      success:true,
      message: 'Libro creado', data:newBook});
  } catch (error) {
    next(error);
  }
}
   