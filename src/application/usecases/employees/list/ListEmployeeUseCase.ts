import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';
import {
  InputFindEmployeeDTO,
  OutputFindEmployeeDTO,
} from './ListEmployee.dto';

@injectable()
class ListEmployeeUseCase {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: EmployeesRepositoryInterface,
  ) {}

  public async execute(
    input: InputFindEmployeeDTO,
  ): Promise<OutputFindEmployeeDTO[]> {
    return this.employeesRepository.findAll();
  }
}

export default ListEmployeeUseCase;
