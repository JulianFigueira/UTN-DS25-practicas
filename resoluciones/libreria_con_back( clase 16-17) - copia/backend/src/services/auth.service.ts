import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import { LoginRequest, LoginResponse } from '../types/auth';
import jwt from 'jsonwebtoken';

export async function login(data: LoginRequest): Promise<LoginResponse['data']> {
  console.log('➡️ Iniciando login con:', data.email);

  // 1. Buscar usuario
  const user = await prisma.user.findUnique({
    where: { mail: data.email }
  });

  if (!user) {
    console.log('❌ Usuario no encontrado:', data.email);
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
  }

  console.log('✅ Usuario encontrado:', user.mail);

  // 2. Verificar password
  const validPassword = await bcrypt.compare(data.password, user.contrasena);

  if (!validPassword) {
    console.log('❌ Contraseña incorrecta para usuario:', user.mail);
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
  }

  console.log('✅ Contraseña válida');

  // 3. Generar JWT
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET no está definido en el entorno');
  }

  const expiresIn = process.env.JWT_EXPIRES_IN ? Number(process.env.JWT_EXPIRES_IN) : 3600;

  const token = jwt.sign(
    { id: user.id, email: user.mail },
    secret,
    { expiresIn }
  );

  console.log('✅ Token generado');

  // 4. Retornar sin password
  const { contrasena: _, mail, ...userWithoutPassword } = user;

  return {
    user: { ...userWithoutPassword, email: mail },
    token
  };
}
