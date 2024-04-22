import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';
import {
  InputRemoveEmployeeDTO,
  OutputRemoveEmployeeDTO,
} from './RemoveEmployee.dto';

@injectable()
class RemoveEmployeeUseCase {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: EmployeesRepositoryInterface,
  ) {}

  public async execute(
    input: InputRemoveEmployeeDTO,
  ): Promise<OutputRemoveEmployeeDTO> {
    return this.employeesRepository.find(input.id);
  }
}

export default RemoveEmployeeUseCase;
