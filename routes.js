//const empleado = require('./api/empleado/index');
const departamento = require('./api/departamento/index');

function routes(app) {
  //app.use('/api/empleado', empleado);
  app.use('/api/departamento', departamento);
}

module.exports = routes;
