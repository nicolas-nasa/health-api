import Enterprise from '@domain/enterprises/entities/Enterprise';
import EnterprisesRepositoryInterface from '@domain/enterprises/repositories/EnterprisesRepositoryInterface';
import { AppDataSource } from '@infra/data/typeorm/connection';
import { EnterprisesEntity } from '@infra/data/typeorm/entities/EnterprisesEntity';
import { Repository } from 'typeorm';

class ConcreteEnterprisesRepository implements EnterprisesRepositoryInterface {
  constructor(
    private enterprisesRepository: Repository<EnterprisesEntity> = AppDataSource.getRepository(
      EnterprisesEntity,
    ),
  ) {}

  async create(entity: Enterprise): Promise<void> {
    const cnpj = await this.enterprisesRepository.findOneBy({
      cnpj: entity.cnpj,
    });

    if (cnpj) throw new Error('Duplicated cnpj');

    const rg = await this.enterprisesRepository.findOneBy({
      cnpj: entity.cnpj,
    });

    if (rg) throw new Error('Duplicated rg');

    await this.enterprisesRepository.insert({
      id: entity.id,
      name: entity.name,
      cnpj: entity.cnpj,
    });
  }
  async update(entity: Enterprise): Promise<void> {
    const employee = await this.find(entity.id);
    await this.enterprisesRepository.update(
      {
        id: employee.id,
        name: employee.name,
        cnpj: employee.cnpj,
      },
      {
        name: entity?.name || employee.name,
        cnpj: entity?.cnpj || employee.cnpj,
      },
    );
  }
  async find(id: string): Promise<Enterprise> {
    const employee = await this.enterprisesRepository.findOneBy({ id });
    if (!employee) throw new Error('Employeer not found');

    const response = new Enterprise({
      id: employee.id,
      name: employee.name,
      cnpj: employee.cnpj,
    });

    return response;
  }
  async findAll(): Promise<Enterprise[]> {
    const all = await this.enterprisesRepository.find();
    const response: Enterprise[] = all.map(
      employee =>
        new Enterprise({
          id: employee.id,
          name: employee.name,
          cnpj: employee.cnpj,
        }),
    );
    return response;
  }
  async delete(id: string): Promise<void> {
    const employee = await this.enterprisesRepository.softDelete({ id });
  }
}

export default ConcreteEnterprisesRepository;
