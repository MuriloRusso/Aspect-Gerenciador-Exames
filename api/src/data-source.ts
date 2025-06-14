import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entity/Usuario";
import { CadExam } from "./entity/Exam";       // ajuste o caminho
import { CadScheduling } from "./entity/Scheduling"; // ajuste o caminho

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "aspect",
  synchronize: true,
  logging: false,
  entities: [Usuario, CadExam, CadScheduling],
  migrations: [],
  subscribers: [],
});
