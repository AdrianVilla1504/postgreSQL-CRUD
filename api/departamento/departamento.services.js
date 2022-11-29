const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

function getAllDepartments(){
  return prisma.departamento.findMany({})
}

function getSingleDepartment(id){
  return prisma.departamento.findUnique({where:{ codigo: id}})
}

function createDepartment(department){
  return prisma.departamento.create({data : department})
}

function updateDepartment(id, department) {
  return prisma.departamento.update({ where: {codigo: id}, data: department })
}

function deleteDepartment(id) {
  return prisma.departamento.delete({ where: {codigo: id}})
}

module.exports = {
  getAllDepartments,
  getSingleDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
}
