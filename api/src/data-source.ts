import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entity/Usuario"; // ajuste para o caminho correto

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "aspect",
  synchronize: true, // cuidado em produção, pois isso altera as tabelas automaticamente
  logging: false,
  entities: [Usuario],
  migrations: [],
  subscribers: [],
});
