import 'reflect-metadata';
import { container } from 'tsyringe';

import EnterprisesRepositoryInterface from '@domain/enterprises/repositories/EnterprisesRepositoryInterface';
import ConcreteEnterprisesRepository from '@infra/repositories/concrete-enterprises/ConcreteEnterprisesRepository';

container.registerSingleton<EnterprisesRepositoryInterface>(
  'EnterprisesRepository',
  ConcreteEnterprisesRepository,
);

