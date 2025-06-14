import "reflect-metadata";
import { DataSource } from "typeorm";
import { Exam } from "./entity/Exam";       // ajuste o caminho
import { Scheduling } from "./entity/Scheduling"; // ajuste o caminho

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "aspect",
  synchronize: true,
  logging: false,
  entities: [Exam, Scheduling],
  migrations: [],
  subscribers: [],
});
