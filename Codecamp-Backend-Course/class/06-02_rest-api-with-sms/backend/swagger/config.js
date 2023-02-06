export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mini Project',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.swagger.js'],
}