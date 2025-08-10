import {Request, Response, NextFunction} from 'express';
import{Book, AgregarLibro, BookResponse, BookListResponse} from '../types/books';
import * as bookService from '../services/services';

export async function getAllBooks(req:Request, res:
        Response<BookListResponse>, next:NextFunction){
            try{
                const books=await bookService.getAllBooks();
                res.json({
                    books,
                    total:books.length
                });
            }catch(error){
                next(error);
            }
            }
export async function AgregarLibroo(
    req:Request<{}, BookResponse, AgregarLibro>,
    res:Response<BookResponse>,
    next: NextFunction
){
    try{
        const newBook=await bookService.createBook(req.body);
        res.status(201).json({
            book:newBook,
            message:'Book created successfully'
        });
    }catch(error){
        next(error);
    }
    }