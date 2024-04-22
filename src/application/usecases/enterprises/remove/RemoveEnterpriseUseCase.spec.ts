import ConcreteEnterprisesRepositoryMock from '@infra/repositories/concrete-enterprises/ConcreteEnterprisesRepositoryMock';
import RemoveEmployeeUseCase from './RemoveEnterpriseUseCase';
import Enterprise from '@domain/enterprises/entities/Enterprise';

describe('Application Use Case tests', () => {
  it('should register and event handler', async () => {
    const remove = new RemoveEmployeeUseCase(
      new ConcreteEnterprisesRepositoryMock(),
    );
    const enterprise = await remove.execute({
      id: 'mocked',
    });
    expect(enterprise).toBeDefined();
    expect(enterprise).toBeInstanceOf(Enterprise);
  });
});
