import ConcreteEmployeesRepositoryMock from '@infra/repositories/concrete-employees/ConcreteEmployeesRepositoryMock';
import RemoveEmployeeUseCase from './RemoveEmployeeUseCase';
import Employee from '@domain/employees/entities/Employee';

describe('Application Use Case tests', () => {
  it('should register and event handler', async () => {
    const remove = new RemoveEmployeeUseCase(
      new ConcreteEmployeesRepositoryMock(),
    );
    const employee = await remove.execute({
      id: 'mocked',
    });
    expect(employee).toBeDefined();
    expect(employee).toBeInstanceOf(Employee);
  });
});
