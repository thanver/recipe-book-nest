/* eslint-disable prettier/prettier */
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
/* eslint-disable prettier/prettier */
const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'recipeBookDB',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity.js'],
  // autoLoadEntities: true,
};
export default config;
