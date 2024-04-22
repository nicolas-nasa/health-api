import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RegisterEnterpriseUseCase from '@application/usecases/enterprises/register/RegisterEnterpriseUseCase';

class registerEnterpriesesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { name, cnpj } = request.body;

      const registerEnterpriseUseCase = container.resolve(
        RegisterEnterpriseUseCase,
      );

      const enterpriseReturn = await registerEnterpriseUseCase.execute({
        name,
        cnpj,
      });

      return response.status(200).json(enterpriseReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default registerEnterpriesesController;
