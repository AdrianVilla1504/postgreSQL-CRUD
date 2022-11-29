-- CreateTable
CREATE TABLE "Departamento" (
    "codigo" INTEGER NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "presupuesto" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "Empleado" (
    "codigo" INTEGER NOT NULL,
    "nif" VARCHAR(9) NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "Apellido1" VARCHAR(100) NOT NULL,
    "Apellido2" VARCHAR(100) NOT NULL,
    "departamentoCodigo" INTEGER NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("codigo")
);

-- AddForeignKey
ALTER TABLE "Empleado" ADD CONSTRAINT "Empleado_departamentoCodigo_fkey" FOREIGN KEY ("departamentoCodigo") REFERENCES "Departamento"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
