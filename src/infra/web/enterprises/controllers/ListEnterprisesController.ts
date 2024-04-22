import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListEnterpriseUseCase from '@application/usecases/enterprises/list/ListEnterpriseUseCase';

class ListEnterprisesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listEnterprisesUseCase = container.resolve(ListEnterpriseUseCase);

      const enterpriseReturn = await listEnterprisesUseCase.execute({});

      return response.status(200).json(enterpriseReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default ListEnterprisesController;
