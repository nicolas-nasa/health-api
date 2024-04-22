import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindEmployeeUseCase from '@application/usecases/employees/find/FindEmployeeUseCase';

class FindEmployeesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id }: { id?: string } = request.query;

      const findEmployeeUseCase = container.resolve(FindEmployeeUseCase);
      if (!id) throw new Error('id must be filled');
      const employeeReturn = await findEmployeeUseCase.execute({ id });

      return response.status(200).json(employeeReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default FindEmployeesController;
