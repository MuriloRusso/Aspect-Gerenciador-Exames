import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { cadExam } from "./entity/Exam";
import { cadScheduling } from "./entity/Scheduling";
import { VercelRequest, VercelResponse } from "@vercel/node";
import cors from "cors";

let cachedApp: ReturnType<typeof express> | null = null;

async function createApp() {
  const app = express();

  app.use(
    cors({
      origin: ["http://localhost:3001", "https://aspect-gerenciador-exames.vercel.app", "https://murilorusso.com.br"],
    })
  );
  app.use(express.json());

  // Conecta com o banco se necessário
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("📦 Banco de dados conectado com sucesso!");
  }

  app.get("/exam", async (_req: Request, res: Response) => {
    const exams = await AppDataSource.getRepository(cadExam).find();
    res.json(exams);
  });

  app.get("/scheduling", async (_req: Request, res: Response) => {
    const scheduling = await AppDataSource.getRepository(cadScheduling).find({
      relations: ["exam"],
    });
    res.json(scheduling);
  });

  app.post("/scheduling", async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(cadScheduling);
    const newScheduling = repo.create(req.body);
    const result = await repo.save(newScheduling);
    res.status(201).json(result);
  });

  app.delete("/scheduling/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(cadScheduling);
    // res.status(200).json({ message: "Agendamento removido com sucesso." });

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

  // app.listen(3000, () => {
  //   console.log("🚀 Servidor rodando em http://localhost:3000");
  // });

  return app;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!cachedApp) {
    cachedApp = await createApp();
  }

  return cachedApp(req, res);
}
