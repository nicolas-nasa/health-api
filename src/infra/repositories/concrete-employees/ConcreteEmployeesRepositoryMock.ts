import Employee from '@domain/employees/entities/Employee';
import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';

class ConcreteEmployeesRepositoryMock implements EmployeesRepositoryInterface {
  constructor() {}

  async create(entity: Employee): Promise<void> {}
  async update(entity: Employee): Promise<void> {}
  async find(id: string): Promise<Employee> {
    const response = new Employee({
      id,
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

    return response;
  }
  async findAll(): Promise<Employee[]> {
    const response: Employee[] = [
      new Employee({
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
      }),
    ];
    return response;
  }
  async delete(id: string): Promise<void> {}
}

export default ConcreteEmployeesRepositoryMock;
