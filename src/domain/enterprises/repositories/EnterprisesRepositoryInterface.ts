import Enterprise from '@domain/enterprises/entities/Enterprise';
import RepositoryInterface from '@domain/@shared/repositories/RepositoryInterface';

export default interface EnterprisesRepositoryInterface
  extends RepositoryInterface<Enterprise> {}
