import ConcreteEmployeesRepositoryMock from '@infra/repositories/concrete-employees/ConcreteEmployeesRepositoryMock';
import ListEmployeeUseCase from './ListEmployeeUseCase';
import Employee from '@domain/employees/entities/Employee';

describe('Application Use Case tests', () => {
  it('should List and event handler', async () => {
    const find = new ListEmployeeUseCase(new ConcreteEmployeesRepositoryMock());
    const employee = await find.execute({
      id: 'mocked',
    });
    expect(employee).toBeDefined();
    expect(employee[0]).toBeInstanceOf(Employee);
  });
});
