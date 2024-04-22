import '@infra/containers';
import { app } from './express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger_output.json';
import { initializeDatabase } from '@infra/data/typeorm/connection';

dotenv.config();
const port: number = Number(process.env.PORT) || 3333;

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

initializeDatabase();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
