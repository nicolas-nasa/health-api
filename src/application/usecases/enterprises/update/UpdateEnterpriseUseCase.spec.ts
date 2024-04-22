import ConcreteEnterprisesRepositoryMock from '@infra/repositories/concrete-enterprises/ConcreteEnterprisesRepositoryMock';
import UpdateEmployeeUseCase from './UpdateEnterpriseUseCase';
import Employee from '@domain/employees/entities/Employee';
import Enterprise from '@domain/enterprises/entities/Enterprise';

describe('Application Use Case tests', () => {
  it('should update and event handler', async () => {
    const update = new UpdateEmployeeUseCase(
      new ConcreteEnterprisesRepositoryMock(),
    );
    const enterprise = await update.execute({
      id: 'mocked',
      name: 'mocked',
      cnpj: 'mocked',
    });

    expect(enterprise.name).toBeDefined();
    expect(enterprise).toBeInstanceOf(Enterprise);
  });
});
