import ConcreteEnterprisesRepositoryMock from '@infra/repositories/concrete-enterprises/ConcreteEnterprisesRepositoryMock';
import FindEmployeeUseCase from './FindEnterpriseUseCase';
import Enterprise from '@domain/enterprises/entities/Enterprise';

describe('Application Use Case tests', () => {
  it('should register and event handler', async () => {
    const find = new FindEmployeeUseCase(
      new ConcreteEnterprisesRepositoryMock(),
    );
    const enterprise = await find.execute({
      id: 'mocked',
    });
    expect(enterprise.name).toBeDefined();
    expect(enterprise).toBeInstanceOf(Enterprise);
  });
});
