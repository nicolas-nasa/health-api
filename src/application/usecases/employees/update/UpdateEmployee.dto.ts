export interface InputUpdateEmployeeDTO {
  id: string;
  name: string;
  taxIdentifier: string;
  rg: string;
  bornAt: string;
  email: string;
  telefone: string;
  address: string;
  sector: string;
  role: string;
  cnpj: string;
}

export interface OutputUpdateEmployeeDTO {
  id: string;
  name: string;
  taxIdentifier: string;
  rg: string;
  bornAt: Date;
  email: string;
  telefone: string;
  address: string;
  sector: string;
  role: string;
  cnpj: string;
}
