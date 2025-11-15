import {Request, Response, NextFunction} from 'express';

export function handlerError(err:any, req:Request, res:Response, next:NextFunction){
    const statusCode=err.statusCode || 500;
    res.status(statusCode).json({
        error:'Internal server error',
        message:err.mesage,
    })
}