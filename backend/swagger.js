const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Avashikol documentation',
    description: 'Documentacion del api para Avashikol.'
  },
  host: 'localhost:8080',
  schemes:['https','http'],
  tags:[{name:'Eventos'},{name:'Login'},{name:'google'},{name:'github'}]
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
