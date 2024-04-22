import ConcreteEmployeesRepositoryMock from '@infra/repositories/concrete-employees/ConcreteEmployeesRepositoryMock';
import UpdateEmployeeUseCase from './UpdateEmployeeUseCase';
import Employee from '@domain/employees/entities/Employee';

describe('Application Use Case tests', () => {
  it('should update and event handler', async () => {
    const update = new UpdateEmployeeUseCase(
      new ConcreteEmployeesRepositoryMock(),
    );
    const employee = await update.execute({
      id: 'mocked',
      name: 'mocked',
      rg: 'mocked',
      email: 'mocked',
      address: 'mocked',
      bornAt: '1998-06-21T00:00:00',
      role: 'mocked',
      sector: 'mocked',
      taxIdentifier: 'mocked',
      telefone: 'mocked',
      cnpj: 'mocked',
    });

    expect(employee.name).toBeDefined();
    expect(employee).toBeInstanceOf(Employee);
  });
});
