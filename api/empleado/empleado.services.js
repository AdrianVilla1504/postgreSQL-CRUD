const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

function getAllEmployees(){
  return prisma.empleado.findMany({})
}

function getSingleEmployee(id){
  return prisma.empleado.findUnique({where:{ codigo: id}})
}

function createEmployee(employee){
  return prisma.empleado.create({data : employee})
}

function updateEmployee(id, employee) {
  return prisma.empleado.update({ where: {codigo: id}, data: employee })
}

function deleteEmployee(id) {
  return prisma.empleado.delete({ where: {codigo: id}})
}

module.exports = {
  getAllEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
}
