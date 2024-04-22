import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';
import {
  InputRegisterEmployeeDTO,
  OutputRegisterEmployeeDTO,
} from './RegisterEmployee.dto';
import Employee from '@domain/employees/entities/Employee';

@injectable()
class RegisterEmployeeUseCase {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: EmployeesRepositoryInterface,
  ) {}

  public async execute(
    input: InputRegisterEmployeeDTO,
  ): Promise<OutputRegisterEmployeeDTO> {
    const employee = new Employee(input);
    await this.employeesRepository.create(employee);
    return employee;
  }

  public async executeBulk(
    inputs: InputRegisterEmployeeDTO[],
  ): Promise<OutputRegisterEmployeeDTO[]> {
    const employees = [];
    for await (const input of inputs) {
      employees.push(await this.execute(input));
    }
    return employees;
  }
}

export default RegisterEmployeeUseCase;
