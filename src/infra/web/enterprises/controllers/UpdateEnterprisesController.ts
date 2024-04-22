import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateEnterpriseUseCase from '@application/usecases/enterprises/update/UpdateEnterpriseUseCase';

class UpdateEnterpriseController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id, name, cnpj } = request.body;

      const updateEnterpriseUseCase = container.resolve(
        UpdateEnterpriseUseCase,
      );

      const enterpriseReturn = await updateEnterpriseUseCase.execute({
        id,
        name,
        cnpj,
      });

      return response.status(200).json(enterpriseReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default UpdateEnterpriseController;
