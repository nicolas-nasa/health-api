import ConcreteEmployeesRepositoryMock from '@infra/repositories/concrete-employees/ConcreteEmployeesRepositoryMock';
import RegisterEmployeeUseCase from './RegisterEmployeeUseCase';
import Employee from '@domain/employees/entities/Employee';

describe('Application Use Case tests', () => {
  it('should register and event handler', async () => {
    const register = new RegisterEmployeeUseCase(
      new ConcreteEmployeesRepositoryMock(),
    );
    const employee = await register.execute({
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

  it('should register bulk and event handler', async () => {
    const register = new RegisterEmployeeUseCase(
      new ConcreteEmployeesRepositoryMock(),
    );
    const employee = await register.execute({
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
