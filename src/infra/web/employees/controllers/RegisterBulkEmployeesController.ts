import { Request, Response } from 'express';
import RegisterEmployeeUseCase from '@application/usecases/employees/register/RegisterEmployeeUseCase';
import ReadCSV from '@domain/@shared/utils/csv-parse';
import { container } from 'tsyringe';
import Employee from '@domain/employees/entities/Employee';
import { InputRegisterEmployeeDTO } from '@application/usecases/employees/register/RegisterEmployee.dto';

class RegisterBulkEmployeesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { buffer } = request.file;
      const delimiter = ',';
      const headers = [
        'name',
        'taxIdentifier',
        'rg',
        'bornAt',
        'email',
        'telefone',
        'address',
        'sector',
        'role',
        'cnpj',
      ];

      const readCsv = new ReadCSV();
      const csv = await readCsv.execute(buffer, headers, delimiter);

      const registerEmployeeUseCase = container.resolve(
        RegisterEmployeeUseCase,
      );

      const employeesReturn = await registerEmployeeUseCase.executeBulk(csv);

      return response.status(200).json(employeesReturn);
    } catch (error) {
      return response.status(500).json({ Message: [`${error}`] });
    }
  }
}

export default RegisterBulkEmployeesController;
