import express from "express";
import { AppDataSource } from "./data-source";
import { Exam } from "./entity/Exam";
import { Scheduling } from "./entity/Scheduling";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log("📦 Banco de dados conectado com sucesso!");

  app.get("/exams", async (req, res) => {
    const exams = await AppDataSource.getRepository(Exam).find();
    res.json(exams);
  });

  app.get("/scheduling", async (req, res) => {
    const scheduling = await AppDataSource.getRepository(Scheduling).find();
    res.json(scheduling);
  });

  app.post("/scheduling", async (req, res) => {
    const repo = AppDataSource.getRepository(Scheduling);
    const newScheduling = repo.create(req.body);
    const result = await repo.save(newScheduling);
    res.status(201).json(result);
  });

  app.listen(3000, () => {
    console.log("🚀 Servidor rodando em http://localhost:3000");
  });
}).catch((error) => console.error("Erro ao conectar no banco:", error));
