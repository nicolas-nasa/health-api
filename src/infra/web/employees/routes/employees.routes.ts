import { Router } from 'express';

import FindEmployeesController from '@infra/web/employees/controllers/FindEmployeesController';
import RegisterEmployeesController from '@infra/web/employees/controllers/RegisterEmployeesController';
import RegisterBulkEmployeesController from '@infra/web/employees/controllers/RegisterBulkEmployeesController';
import RemoveEmployeesController from '@infra/web/employees/controllers/RemoveEmployeesController';
import ListEmployeesController from '@infra/web/employees/controllers/ListEmployeesController';
import UpdateEmployeesController from '@infra/web/employees/controllers/UpdateEmployeesController';
import { MultFormMiddleware } from '@domain/@shared/middleware/multer';

const employeesRouter = Router();

const employeesController = new FindEmployeesController();
const registerEmployeesController = new RegisterEmployeesController();
const registerBulkEmployeesController = new RegisterBulkEmployeesController();
const updateEmployeesController = new UpdateEmployeesController();
const listEmployeesController = new ListEmployeesController();
const removeEmployeesController = new RemoveEmployeesController();

employeesRouter.get('/find/:id', employeesController.index);

employeesRouter.delete('/:id', removeEmployeesController.index);

employeesRouter.post('/', registerEmployeesController.index);

employeesRouter.post(
  '/bulk',
  MultFormMiddleware.single('file'),
  registerBulkEmployeesController.index,
);

employeesRouter.patch('/', updateEmployeesController.index);

employeesRouter.get('/all', listEmployeesController.index);

export default employeesRouter;
