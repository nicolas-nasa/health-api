export interface InputRegisterEmployeeDTO {
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

export interface OutputRegisterEmployeeDTO {
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
