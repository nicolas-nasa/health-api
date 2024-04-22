import { BaseEntity } from './BaseEntity';
import { EnterprisesEntity } from './EnterprisesEntity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'employees' })
export class EmployeeEntity extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;
  @Column({ name: 'taxIdentifier', type: 'varchar', unique: true })
  taxIdentifier: string;
  @Column({ name: 'rg', type: 'varchar', unique: true })
  rg: string;
  @Column({ name: 'born_at', type: 'date' })
  bornAt: Date;
  @Column({ nullable: true, name: 'email', type: 'varchar' })
  email?: string;
  @Column({ nullable: true, name: 'telefone', type: 'varchar' })
  telefone?: string;
  @Column({ name: 'address', type: 'varchar' })
  address: string;
  @Column({ name: 'sector', type: 'varchar' })
  sector: string;
  @Column({ name: 'role', type: 'varchar' })
  role: string;
  @Column({ name: 'cnpj', type: 'varchar' })
  cnpj: string;

  @ManyToOne(() => EnterprisesEntity, enterprise => enterprise.id)
  @JoinColumn({ name: 'enterprise_id' })
  enterprise: EnterprisesEntity;
}
