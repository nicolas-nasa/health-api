import { BaseEntity } from './BaseEntity';
import { EmployeeEntity } from './EmployeesEntity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'enterprises' })
export class EnterprisesEntity extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;
  @Column({ type: 'varchar' })
  cnpj: string;

  @OneToMany(() => EmployeeEntity, employe => employe.enterprise)
  employees: EmployeeEntity[];
}
