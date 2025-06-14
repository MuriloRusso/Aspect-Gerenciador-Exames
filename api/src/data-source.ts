import "reflect-metadata";
import { DataSource } from "typeorm";
import { cadExam } from "./entity/Exam";       // ajuste o caminho
import { cadScheduling } from "./entity/Scheduling"; // ajuste o caminho

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "aspect",
  synchronize: true,
  logging: false,
  entities: [cadExam, cadScheduling],
  migrations: [],
  subscribers: [],
});
