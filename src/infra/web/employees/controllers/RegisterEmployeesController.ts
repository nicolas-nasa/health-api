import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RegisterEmployeeUseCase from '@application/usecases/employees/register/RegisterEmployeeUseCase';

class registerEmployeesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const {
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

      const registerEmployeeUseCase = container.resolve(
        RegisterEmployeeUseCase,
      );

      const employeeReturn = await registerEmployeeUseCase.execute({
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

export default registerEmployeesController;
