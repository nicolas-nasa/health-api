import { Router } from 'express';

import employeesRouter from '@infra/web/employees/routes';
import enterprisesRouter from '@infra/web/enterprises/routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({
    title: 'Obrigado',
    description: 'Boa semana!',
  });
});

routes.use('/', employeesRouter);
routes.use('/', enterprisesRouter);

export default routes;
