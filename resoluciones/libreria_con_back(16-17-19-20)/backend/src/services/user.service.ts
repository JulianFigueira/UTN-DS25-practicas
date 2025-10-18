import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import { User , CreateUser, UserResponse, UserListResponse } from
'../types/user' ;

export async function getAllUsers(limit: number = 10): Promise<UserResponse[]> {
 const users = await prisma.user.findMany({
 orderBy: { id: "asc" },
 take: limit,
 select: {
      id: true,
      mail: true,
      // contrasena: false → no se incluye
    }
 });
 return users;
}

export async function getUserById(id: number): Promise<UserResponse> {
 const user = await prisma.user.findUnique({ 
    where: { id }, 
  select: {
      id: true,
      mail: true,
      // contrasena: false → no se incluye
    } });
 if (!user) {
 const error = new Error('Usuario no encontrado') as any;
 error.statusCode = 404;
 throw error;
 }
 return user;
}


export async function createUser(data: CreateUser): Promise<UserResponse> {
 // 1. Verificar si existe
 const exists = await prisma.user.findUnique({ where: { mail: data.mail }});
 if (exists) {
 const error = new Error('Email ya registrado') as any;
 error.statusCode = 409;
 throw error;
 }
 // 2. Hashear password
 const hashedPassword = await bcrypt.hash(data.contrasena, 10);
 // 3. Crear usuario
 const user = await prisma.user.create({
 data: {
      mail: data.mail,
      contrasena: hashedPassword,
 },
   select: {
      id: true,
      mail: true,
    }
 });
 return user;
}


export async function deleteUser(id: number): Promise<void> {
 try {
 await prisma.user.delete({ where: { id } });
 } catch (e: any) {
 if (e.code === 'P2025') {
 const error = new Error('Usuario no encontrado') as any;
 error.statusCode = 404;
 throw error;
 }
 throw e;
 }
}
