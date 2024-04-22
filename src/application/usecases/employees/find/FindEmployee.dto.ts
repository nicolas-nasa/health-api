export interface InputFindEmployeeDTO {
  id: string;
}

export interface OutputFindEmployeeDTO {
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
