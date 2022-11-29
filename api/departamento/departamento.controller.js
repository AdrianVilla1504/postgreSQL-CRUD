const {
  getAllDepartments,
  getSingleDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("./departamento.services");

async function getAllDepartmentsHandler(_, res) {
  try {
    const department = await getAllDepartments();
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getSingleDepartmentHandler(req, res) {
  const { id } = req.params;
  try {
    const department = await getSingleDepartment(parseInt(id));

    if (!department) {
      return res.status(404).json({ message: "Departamento no encontrado." });
    }

    return res.status(200).json(department);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function createDepartmentHandler(req, res) {
  const departmentData = req.body;
  try {
    const department = await createDepartment(departmentData);
    return res.status(201).json(department);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function updateDepartmentHandler(req, res) {
  const { id } = req.params;
  const departmentData = req.body;

  try {
    const department = await updateDepartment(parseInt(id), departmentData);
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteDepartmentHandler(req, res) {
  const { id } = req.params;

  try {
    const department = await deleteDepartment(parseInt(id));
    if (!department) {
      return res.status(400).json({ message: "Departamento no encontrado" });
    }

    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAllDepartmentsHandler,
  getSingleDepartmentHandler,
  createDepartmentHandler,
  updateDepartmentHandler,
  deleteDepartmentHandler,
};
