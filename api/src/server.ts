// src/server.ts

import express from "express";
import { AppDataSource } from "./data-source";
import { cadExam } from "./entity/Exam";
import { cadScheduling } from "./entity/Scheduling";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log("📦 Banco de dados conectado com sucesso!");

  app.get("/exam", async (_req, res) => {
    const exams = await AppDataSource.getRepository(cadExam).find();
    res.json(exams);
  });

  app.get("/scheduling", async (_req, res) => {
    const scheduling = await AppDataSource.getRepository(cadScheduling).find({
      relations: ["exam"],
    });
    res.json(scheduling);
  });

  app.post("/scheduling", async (req, res) => {
    const repo = AppDataSource.getRepository(cadScheduling);
    const newScheduling = repo.create(req.body);
    const result = await repo.save(newScheduling);
    res.status(201).json(result);
  });

  app.delete("/scheduling/:id", async (req, res) => {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(cadScheduling);

    try {
      const result = await repo.delete(Number(id));
      if (result.affected === 0) {
        res.status(404).json({ message: "Agendamento não encontrado." });
      }
      res.status(200).json({ message: "Agendamento removido com sucesso." });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar agendamento.", error });
    }
  });

  app.listen(3000, () => {
    console.log("🚀 Servidor rodando em http://localhost:3000");
  });
}).catch((error) => console.error("Erro ao conectar no banco:", error));
