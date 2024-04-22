import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RemoveEmployeeUseCase from '@application/usecases/employees/remove/RemoveEmployeeUseCase';

class RemoveEmployeesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id }: { id?: string } = request.query;

      const removeEmployeeUseCase = container.resolve(RemoveEmployeeUseCase);
      if (!id) throw new Error('id must be filled');
      const employeeReturn = await removeEmployeeUseCase.execute({ id });

      return response.status(200).json(employeeReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default RemoveEmployeesController;
