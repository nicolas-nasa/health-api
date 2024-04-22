import Employee from '@domain/employees/entities/Employee';
import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';
import { AppDataSource } from '@infra/data/typeorm/connection';
import { EmployeeEntity } from '@infra/data/typeorm/entities/EmployeesEntity';
import { EnterprisesEntity } from '@infra/data/typeorm/entities/EnterprisesEntity';
import { Repository } from 'typeorm';

class ConcreteEmployeesRepository implements EmployeesRepositoryInterface {
  constructor(
    private employeesRepository: Repository<EmployeeEntity> = AppDataSource.getRepository(
      EmployeeEntity,
    ),
    private enterpriseRepository: Repository<EnterprisesEntity> = AppDataSource.getRepository(
      EnterprisesEntity,
    ),
  ) {}

  async create(entity: Employee): Promise<void> {
    const taxIdentifier = await this.employeesRepository.findOneBy({
      taxIdentifier: entity.taxIdentifier,
    });

    if (taxIdentifier) throw new Error('Duplicated taxIdentifier');

    const rg = await this.employeesRepository.findOneBy({
      taxIdentifier: entity.taxIdentifier,
    });

    if (rg) throw new Error('Duplicated rg');

    const enterprise = await this.enterpriseRepository.findOneBy({
      cnpj: entity.cnpj,
    });

    if (!enterprise) throw new Error('Enterprise not exist');

    await this.employeesRepository.insert({
      id: entity.id,
      name: entity.name,
      taxIdentifier: entity.taxIdentifier,
      rg: entity.rg,
      bornAt: entity.bornAt,
      email: entity.email,
      telefone: entity.telefone,
      address: entity.address,
      sector: entity.sector,
      role: entity.role,
      cnpj: entity.cnpj,
      enterprise: { id: enterprise.id },
    });
  }
  async update(entity: Employee): Promise<void> {
    const employee = await this.find(entity.id);

    await this.employeesRepository.update(
      {
        id: employee.id,
        name: employee.name,
        taxIdentifier: employee.taxIdentifier,
        rg: employee.rg,
        bornAt: employee.bornAt,
        email: employee.email,
        telefone: employee.telefone,
        address: employee.address,
        sector: employee.sector,
        role: employee.role,
      },
      {
        name: entity?.name || employee.name,
        taxIdentifier: entity?.taxIdentifier || employee.taxIdentifier,
        rg: entity?.rg || employee.rg,
        bornAt: entity?.bornAt || employee.bornAt,
        email: entity?.email || employee.email,
        telefone: entity?.telefone || employee.telefone,
        address: entity?.address || employee.address,
        sector: entity?.sector || employee.sector,
        role: entity?.role || employee.role,
      },
    );
  }
  async find(id: string): Promise<Employee> {
    const employee = await this.employeesRepository.findOneBy({ id });
    if (!employee) throw new Error('Employeer not found');

    const response = new Employee({
      id: employee.id,
      name: employee.name,
      rg: employee.rg,
      email: employee.email,
      address: employee.address,
      bornAt: employee.bornAt,
      role: employee.role,
      sector: employee.sector,
      taxIdentifier: employee.taxIdentifier,
      telefone: employee.telefone,
      cnpj: employee.cnpj,
    });

    return response;
  }
  async findAll(): Promise<Employee[]> {
    const all = await this.employeesRepository.find();
    const response: Employee[] = all.map(
      employee =>
        new Employee({
          id: employee.id,
          name: employee.name,
          rg: employee.rg,
          email: employee.email,
          address: employee.address,
          bornAt: employee.bornAt,
          role: employee.role,
          sector: employee.sector,
          taxIdentifier: employee.taxIdentifier,
          telefone: employee.telefone,
          cnpj: employee.cnpj,
        }),
    );
    return response;
  }
  async delete(id: string): Promise<void> {
    const employee = await this.employeesRepository.softDelete({ id });
  }
}

export default ConcreteEmployeesRepository;
