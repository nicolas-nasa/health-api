import Enterprise from '@domain/enterprises/entities/Enterprise';
import EnterprisesRepositoryInterface from '@domain/enterprises/repositories/EnterprisesRepositoryInterface';

class ConcreteEnterprisesRepositoryMock
  implements EnterprisesRepositoryInterface
{
  constructor() {}

  async create(entity: Enterprise): Promise<void> {}
  async update(entity: Enterprise): Promise<void> {}
  async find(id: string): Promise<Enterprise> {
    const response = new Enterprise({
      id,
      name: 'mocked',
      cnpj: 'mocked',
    });

    return response;
  }
  async findAll(): Promise<Enterprise[]> {
    const response: Enterprise[] = [
      new Enterprise({
        id: 'mocked',
        name: 'mocked',
        cnpj: 'mocked',
      }),
    ];
    return response;
  }
  async delete(id: string): Promise<void> {}
}

export default ConcreteEnterprisesRepositoryMock;
