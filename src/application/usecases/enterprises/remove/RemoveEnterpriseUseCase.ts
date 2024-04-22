import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EnterprisesRepositoryInterface from '@domain/enterprises/repositories/EnterprisesRepositoryInterface';
import {
  InputRemoveEnterpriseDTO,
  OutputRemoveEnterpriseDTO,
} from './RemoveEnterprise.dto';

@injectable()
class RemoveEnterprisesUseCase {
  constructor(
    @inject('EnterprisesRepository')
    private enterprisesRepository: EnterprisesRepositoryInterface,
  ) {}

  public async execute(
    input: InputRemoveEnterpriseDTO,
  ): Promise<OutputRemoveEnterpriseDTO> {
    return this.enterprisesRepository.find(input.id);
  }
}

export default RemoveEnterprisesUseCase;
