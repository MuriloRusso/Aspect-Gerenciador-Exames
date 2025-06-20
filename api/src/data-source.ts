import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "dotenv";
import { cadExam } from "./entity/Exam";
import { cadScheduling } from "./entity/Scheduling";

config(); // Carrega as variáveis do .env

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [cadExam, cadScheduling],
  migrations: [],
  subscribers: [],
});
