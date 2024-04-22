import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EnterprisesRepositoryInterface from '@domain/enterprises/repositories/EnterprisesRepositoryInterface';
import {
  InputUpdateEnterpriseDTO,
  OutputUpdateEnterpriseDTO,
} from './UpdateEnterprise.dto';
import Enterprise from '@domain/enterprises/entities/Enterprise';

@injectable()
class UpdateEnterpriseUseCase {
  constructor(
    @inject('EnterprisesRepository')
    private enterprisesRepository: EnterprisesRepositoryInterface,
  ) {}

  public async execute(
    input: InputUpdateEnterpriseDTO,
  ): Promise<OutputUpdateEnterpriseDTO> {
    const enterprise = new Enterprise(input);
    await this.enterprisesRepository.update(enterprise);
    return enterprise;
  }
}

export default UpdateEnterpriseUseCase;
