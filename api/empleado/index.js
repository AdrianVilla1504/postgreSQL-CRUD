const Router = require("express");

const {
  getAllEmployeesHandler,
  getSingleEmployeeHandler,
  createEmployeeHandler,
  updateEmployeeHandler,
  deleteEmployeeHandler,
} = require("./empleado.controller");

const router = Router();

router.get("/", getAllEmployeesHandler);
router.get("/:id", getSingleEmployeeHandler);
router.post("/", createEmployeeHandler);
router.patch("/:id", updateEmployeeHandler);
router.delete("/:id", deleteEmployeeHandler);

module.exports = router;
