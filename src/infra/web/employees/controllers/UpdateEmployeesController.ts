import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateEmployeeUseCase from '@application/usecases/employees/update/UpdateEmployeeUseCase';

class UpdateEmployeesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const {
        id,
        name,
        taxIdentifier,
        rg,
        bornAt,
        email,
        telefone,
        address,
        sector,
        role,
        cnpj,
      } = request.body;

      const updateEmployeeUseCase = container.resolve(UpdateEmployeeUseCase);

      const employeeReturn = await updateEmployeeUseCase.execute({
        id,
        name,
        taxIdentifier,
        rg,
        bornAt,
        email,
        telefone,
        address,
        sector,
        role,
        cnpj,
      });

      return response.status(200).json(employeeReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default UpdateEmployeesController;
