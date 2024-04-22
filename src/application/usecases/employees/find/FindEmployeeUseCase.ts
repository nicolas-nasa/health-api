import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';
import {
  InputFindEmployeeDTO,
  OutputFindEmployeeDTO,
} from './FindEmployee.dto';

@injectable()
class FindEmployeeUseCase {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: EmployeesRepositoryInterface,
  ) {}

  public async execute(
    input: InputFindEmployeeDTO,
  ): Promise<OutputFindEmployeeDTO> {
    return this.employeesRepository.find(input.id);
  }
}

export default FindEmployeeUseCase;
