import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || '120.76.43.198',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'flutter',
  password: process.env.DB_PASSWORD || 'DSnm9512357',
  database: process.env.DB_NAME || 'flutter',
  entities: ['src/entities/**/*', 'entities/**/*'],
  // process.env.NODE_ENV !== 'production'
  synchronize: false,
  logging: process.env.NODE_ENV !== 'production',
}; 