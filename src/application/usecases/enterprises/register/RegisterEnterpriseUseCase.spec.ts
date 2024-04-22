import ConcreteEnterprisesRepositoryMock from '@infra/repositories/concrete-enterprises/ConcreteEnterprisesRepositoryMock';
import RegisterEmployeeUseCase from './RegisterEnterpriseUseCase';
import Enterprise from '@domain/enterprises/entities/Enterprise';

describe('Application Use Case tests', () => {
  it('should register and event handler', async () => {
    const register = new RegisterEmployeeUseCase(
      new ConcreteEnterprisesRepositoryMock(),
    );
    const enterprise = await register.execute({
      name: 'mocked',
      cnpj: 'mocked',
    });

    expect(enterprise.name).toBeDefined();
    expect(enterprise).toBeInstanceOf(Enterprise);
  });
});
