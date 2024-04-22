import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EnterprisesRepositoryInterface from '@domain/enterprises/repositories/EnterprisesRepositoryInterface';
import {
  InputRegisterEnterpriseDTO,
  OutputRegisterEnterpriseDTO,
} from './RegisterEnterprise.dto';
import Enterprise from '@domain/enterprises/entities/Enterprise';

@injectable()
class RegisterEmployeeUseCase {
  constructor(
    @inject('EnterprisesRepository')
    private enterprisesRepository: EnterprisesRepositoryInterface,
  ) {}

  public async execute(
    input: InputRegisterEnterpriseDTO,
  ): Promise<OutputRegisterEnterpriseDTO> {
    const employee = new Enterprise(input);
    await this.enterprisesRepository.create(employee);
    return employee;
  }
}

export default RegisterEmployeeUseCase;
