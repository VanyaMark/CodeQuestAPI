const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerOptions = {
//   definition: {
//     openapi: '3.0.0', // Specify OpenAPI version
//     info: {
//       title: 'CodeQuestAPI',
//       version: '1.0.0',
//       description: 'CodeQuestAPI Documentation',
//       url: 'THE URL HERE' 
//     },
//     servers: [
//       {
//         url: 'http://localhost:3000/',
//       },
//     ],
//     tags: {
//         name: 'question',
//         description: 'Access to questions functions',
//     },
//     paths: {
//         '/template-form'
//     }
//   },
//   apis: ['/routes/*.js'], // Path to files with documentation in JSDoc format
// };

const swaggerOptions = {
    definition: {
      openapi: '3.0.0', // Specify OpenAPI version
      info: {
        title: 'Your API Name',
        version: '1.0.0',
        description: 'API Documentation',
      },
      servers: [
        {
          url: 'http://localhost:3000/api', // Replace with your server URL
        },
      ],
    },
    apis: ['./routes/*.js'], // Path to files with documentation in JSDoc format
  };
const swaggerDocs = swaggerJSDoc(swaggerOptions);


module.exports = swaggerDocs;