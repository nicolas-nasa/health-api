import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EnterprisesRepositoryInterface from '@domain/enterprises/repositories/EnterprisesRepositoryInterface';
import {
  InputFindEnterpriseDTO,
  OutputFindEnterpriseDTO,
} from './ListEnterprise.dto';

@injectable()
class ListEnterprisesUseCase {
  constructor(
    @inject('EnterprisesRepository')
    private enterprisesRepository: EnterprisesRepositoryInterface,
  ) {}

  public async execute(
    input: InputFindEnterpriseDTO,
  ): Promise<OutputFindEnterpriseDTO[]> {
    return this.enterprisesRepository.findAll();
  }
}

export default ListEnterprisesUseCase;
