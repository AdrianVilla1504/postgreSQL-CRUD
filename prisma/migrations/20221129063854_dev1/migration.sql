/*
  Warnings:

  - You are about to drop the column `Apellido1` on the `Empleado` table. All the data in the column will be lost.
  - You are about to drop the column `Apellido2` on the `Empleado` table. All the data in the column will be lost.
  - Added the required column `apellido1` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellido2` to the `Empleado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Empleado" DROP COLUMN "Apellido1",
DROP COLUMN "Apellido2",
ADD COLUMN     "apellido1" VARCHAR(100) NOT NULL,
ADD COLUMN     "apellido2" VARCHAR(100) NOT NULL;
