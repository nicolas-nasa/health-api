import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListEmployeeUseCase from '@application/usecases/employees/list/ListEmployeeUseCase';

class ListEmployeesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listEmployeeUseCase = container.resolve(ListEmployeeUseCase);

      const employeeReturn = await listEmployeeUseCase.execute({});

      return response.status(200).json(employeeReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default ListEmployeesController;
