// UMA ENTIDADE SEMPRE DEVE SE AUTOVALIDAR
import { randomUUID } from 'crypto';
import Entity from '../../@shared/entities/entity.abstract';

interface IEnterprise {
  id?: string;
  name: string;
  cnpj: string;
}

export default class Enterprise extends Entity {
  protected _id: string = randomUUID();
  private _name: string = '';
  private _cnpj: string = '';
  private _active: boolean = false;

  constructor(employee: IEnterprise) {
    super();
    this._id = employee?.id;
    this._name = employee.name;
    this._cnpj = employee.cnpj;

    this.validate();
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }

  get cnpj(): string {
    return this._cnpj;
  }

  validate(): void {
    try {
      if (this._name === '') throw new Error('name must be filled');
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
      throw new Error('Name is mandatory to activate a enterprise');
    if (this._cnpj === '')
      throw new Error('cnpj is mandatory to activate a enterprise');

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  isActive(): boolean {
    return this._active;
  }
}
