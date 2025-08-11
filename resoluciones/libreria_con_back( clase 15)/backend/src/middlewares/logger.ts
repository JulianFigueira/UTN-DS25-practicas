import {Request, Response, NextFunction} from 'express';

export function logRequest(req:Request, res:Response, next:NextFunction){
    const timestap=new Date().toISOString();
    const method=req.method;
    const url=req.url;
    console.log(`[${timestap}] ${method} ${url}`);
    next();
    }
