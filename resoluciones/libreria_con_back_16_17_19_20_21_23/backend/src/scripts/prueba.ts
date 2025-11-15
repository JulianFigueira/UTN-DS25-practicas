import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

async function main() {
  const hashedPassword1 = await bcrypt.hash('Prueba1', 10);
  const hashedPassword2 = await bcrypt.hash('Secreta2', 10);

  // Crear usuarios en la DB
  await prisma.user.create({
    data: {
      mail: 'julian@example.com',
      contrasena: hashedPassword1,
    },
  });

  await prisma.user.create({
    data: {
      mail: 'ana@example.com',
      contrasena: hashedPassword2,
    },
  });

  console.log('Usuarios de prueba creados');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
