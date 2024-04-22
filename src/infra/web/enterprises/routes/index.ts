import { Router } from 'express';

import enterprisesRouter from './enterprises.routes';
const routes = Router();

routes.use('/enterprises', enterprisesRouter);

export default routes;
