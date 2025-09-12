-- CreateTable
CREATE TABLE "public"."Formulario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechanac" TIMESTAMP(3) NOT NULL,
    "mail" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "sexo" BOOLEAN NOT NULL,

    CONSTRAINT "Formulario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
