import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RemoveEnterpriseUseCase from '@application/usecases/enterprises/remove/RemoveEnterpriseUseCase';

class RemoveEnterprisesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id }: { id?: string } = request.query;

      const removeEnterpriseUseCase = container.resolve(
        RemoveEnterpriseUseCase,
      );
      if (!id) throw new Error('id must be filled');
      const enterpriseReturn = await removeEnterpriseUseCase.execute({ id });

      return response.status(200).json(enterpriseReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default RemoveEnterprisesController;
