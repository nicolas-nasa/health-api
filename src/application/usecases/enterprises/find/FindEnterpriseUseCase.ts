import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EnterprisesRepositoryInterface from '@domain/enterprises/repositories/EnterprisesRepositoryInterface';
import {
  InputFindEnterpriseDTO,
  OutputFindEnterpriseDTO,
} from './FindEnterprise.dto';

@injectable()
class FindEnterpriseUseCase {
  constructor(
    @inject('EnterprisesRepository')
    private enterprisesRepository: EnterprisesRepositoryInterface,
  ) {}

  public async execute(
    input: InputFindEnterpriseDTO,
  ): Promise<OutputFindEnterpriseDTO> {
    return this.enterprisesRepository.find(input.id);
  }
}

export default FindEnterpriseUseCase;
