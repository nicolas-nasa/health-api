import ConcreteEnterprisesRepositoryMock from '@infra/repositories/concrete-enterprises/ConcreteEnterprisesRepositoryMock';
import ListEmployeeUseCase from './ListEnterpriseUseCase';
import Enterprise from '@domain/enterprises/entities/Enterprise';

describe('Application Use Case tests', () => {
  it('should List and event handler', async () => {
    const find = new ListEmployeeUseCase(
      new ConcreteEnterprisesRepositoryMock(),
    );
    const enterprise = await find.execute({
      id: 'mocked',
    });
    expect(enterprise).toBeDefined();
    expect(enterprise[0]).toBeInstanceOf(Enterprise);
  });
});
