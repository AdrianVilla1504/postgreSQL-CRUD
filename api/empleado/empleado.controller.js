const {
  getAllEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("./empleado.services");

async function getAllEmployeesHandler(_, res) {
  try {
    const Employee = await getAllEmployees();
    return res.status(200).json(Employee);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getSingleEmployeeHandler(req, res) {
  const { id } = req.params;
  try {
    const Employee = await getSingleEmployee(parseInt(id));

    if (!Employee) {
      return res.status(404).json({ message: "Departamento no encontrado." });
    }

    return res.status(200).json(Employee);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function createEmployeeHandler(req, res) {
  const EmployeeData = req.body;
  try {
    const Employee = await createEmployee(EmployeeData);
    return res.status(201).json(Employee);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function updateEmployeeHandler(req, res) {
  const { id } = req.params;
  const EmployeeData = req.body;

  try {
    const Employee = await updateEmployee(parseInt(id), EmployeeData);
    return res.status(200).json(Employee);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteEmployeeHandler(req, res) {
  const { id } = req.params;

  try {
    const Employee = await deleteEmployee(parseInt(id));
    if (!Employee) {
      return res.status(400).json({ message: "Departamento no encontrado" });
    }

    return res.status(200).json(Employee);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAllEmployeesHandler,
  getSingleEmployeeHandler,
  createEmployeeHandler,
  updateEmployeeHandler,
  deleteEmployeeHandler,
};
