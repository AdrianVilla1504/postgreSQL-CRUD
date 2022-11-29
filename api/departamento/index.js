const Router = require("express");

const {
  getAllDepartmentsHandler,
  getSingleDepartmentHandler,
  createDepartmentHandler,
  updateDepartmentHandler,
  deleteDepartmentHandler,
} = require("./departamento.controller");

const router = Router();

router.get("/", getAllDepartmentsHandler);
router.get("/:id", getSingleDepartmentHandler);
router.post("/", createDepartmentHandler);
router.patch("/:id", updateDepartmentHandler);
router.delete("/:id", deleteDepartmentHandler);

module.exports = router;
