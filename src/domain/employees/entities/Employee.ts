// UMA ENTIDADE SEMPRE DEVE SE AUTOVALIDAR
import { randomUUID } from 'crypto';
import Entity from '../../@shared/entities/entity.abstract';

interface IEmployee {
  id?: string;
  name: string;
  taxIdentifier: string;
  rg: string;
  bornAt: Date | string;
  email: string;
  telefone: string;
  address: string;
  sector: string;
  role: string;
  cnpj: string;
}

export default class Employee extends Entity {
  protected _id: string = randomUUID();
  private _name: string = '';
  private _cnpj: string = '';
  private _taxIdentifier: string = '';
  private _rg: string = '';
  private _bornAt: Date;
  private _email: string = '';
  private _telefone: string = '';
  private _address: string = '';
  private _sector: string = '';
  private _role: string = '';
  private _active: boolean = false;

  constructor(employee: IEmployee) {
    super();
    this._id = employee?.id;
    this._name = employee.name;
    this._taxIdentifier = employee.taxIdentifier;
    this._rg = employee.rg;
    this._bornAt = new Date(employee.bornAt);
    this._email = employee.email;
    this._telefone = employee.telefone;
    this._address = employee.address;
    this._sector = employee.sector;
    this._role = employee.role;
    this._cnpj = employee.cnpj;
    this.validate();
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }

  get taxIdentifier(): string {
    return this._taxIdentifier;
  }

  get rg(): string {
    return this._rg;
  }

  get bornAt(): Date {
    return this._bornAt;
  }

  get email(): string {
    return this._email;
  }

  get telefone(): string {
    return this._telefone;
  }

  get address(): string {
    return this._address;
  }

  get sector(): string {
    return this._sector;
  }

  get role(): string {
    return this._role;
  }

  get cnpj(): string {
    return this._cnpj;
  }

  validate(): void {
    try {
      if (this._name === '') throw new Error('name must be filled');
      if (this._taxIdentifier === '')
        throw new Error('taxIdentifier must be filled');
      if (this._rg === '') throw new Error('rg must be filled');
      if (!this._bornAt) throw new Error('bornAt must be filled');
      if (this._email === '' && this._telefone === '')
        throw new Error('telefone or email must be filled');
      if (this._address === '') throw new Error('address must be filled');
      if (this._sector === '') throw new Error('sector must be filled');
      if (this._role === '') throw new Error('role must be filled');
      if (this._cnpj === '') throw new Error('cnpj must be filled');
    } catch (err) {
      throw err;
    }
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._name === '')
      throw new Error('Name is mandatory to activate a employee');
    if (this._taxIdentifier === '')
      throw new Error('taxIdentifier is mandatory to activate a employee');
    if (this._rg === '')
      throw new Error('rg is mandatory to activate a employee');
    if (this._bornAt)
      throw new Error('bornAt is mandatory to activate a employee');
    if (this._email === '' || this._telefone === '')
      throw new Error('telefone or email is mandatory to activate a employee');
    if (this._address === '')
      throw new Error('address is mandatory to activate a employee');
    if (this._sector === '')
      throw new Error('sector is mandatory to activate a employee');
    if (this._role === '')
      throw new Error('role is mandatory to activate a employee');

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  isActive(): boolean {
    return this._active;
  }
}
