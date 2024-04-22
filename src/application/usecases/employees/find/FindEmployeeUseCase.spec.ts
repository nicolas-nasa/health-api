import ConcreteEmployeesRepositoryMock from '@infra/repositories/concrete-employees/ConcreteEmployeesRepositoryMock';
import FindEmployeeUseCase from './FindEmployeeUseCase';
import Employee from '@domain/employees/entities/Employee';

describe('Application Use Case tests', () => {
  it('should register and event handler', async () => {
    const find = new FindEmployeeUseCase(new ConcreteEmployeesRepositoryMock());
    const employee = await find.execute({
      id: 'mocked',
    });
    expect(employee.name).toBeDefined();
    expect(employee).toBeInstanceOf(Employee);
  });
});
