import { Router } from 'express';

import FindEnterprisesController from '@infra/web/enterprises/controllers/FindEnterprisesController';
import RegisterEnterprisesController from '@infra/web/enterprises/controllers/RegisterEnterprisesController';
import RemoveEnterprisesController from '@infra/web/enterprises/controllers/RemoveEnterprisesController';
import ListEnterprisesController from '@infra/web/enterprises/controllers/ListEnterprisesController';
import UpdateEnterprisesController from '@infra/web/enterprises/controllers/UpdateEnterprisesController';

const employeesRouter = Router();

const findEnterprisesController = new FindEnterprisesController();
const registerEnterprisesController = new RegisterEnterprisesController();
const updateEnterprisesController = new UpdateEnterprisesController();
const listEnterprisesController = new ListEnterprisesController();
const removeEnterprisesController = new RemoveEnterprisesController();

employeesRouter.get('/find/:id', findEnterprisesController.index);

employeesRouter.delete('/:id', removeEnterprisesController.index);

employeesRouter.post('/', registerEnterprisesController.index);

employeesRouter.patch('/', updateEnterprisesController.index);

employeesRouter.get('/all', listEnterprisesController.index);

export default employeesRouter;
