import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindEnterpriseUseCase from '@application/usecases/enterprises/find/FindEnterpriseUseCase';

class FindEnterprisesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id }: { id?: string } = request.query;

      const findEnterpriseUseCase = container.resolve(FindEnterpriseUseCase);
      if (!id) throw new Error('id must be filled');
      const enterpriseReturn = await findEnterpriseUseCase.execute({ id });

      return response.status(200).json(enterpriseReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default FindEnterprisesController;
