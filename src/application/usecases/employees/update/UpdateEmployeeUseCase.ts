import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';
import {
  InputUpdateEmployeeDTO,
  OutputUpdateEmployeeDTO,
} from './UpdateEmployee.dto';
import Employee from '@domain/employees/entities/Employee';

@injectable()
class UpdateEmployeeUseCase {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: EmployeesRepositoryInterface,
  ) {}

  public async execute(
    input: InputUpdateEmployeeDTO,
  ): Promise<OutputUpdateEmployeeDTO> {
    const employee = new Employee(input);
    await this.employeesRepository.update(employee);
    return employee;
  }
}

export default UpdateEmployeeUseCase;
