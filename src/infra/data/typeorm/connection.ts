import { DataSource } from 'typeorm';

import dotenv from 'dotenv';
import { entities } from './entities';
dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT || '5432'),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: false,
  logging: true,
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  entities,
  subscribers: [],
});

export async function initializeDatabase(): Promise<void> {
  await AppDataSource.initialize();
}
