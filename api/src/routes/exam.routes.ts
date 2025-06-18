// src/routes/usuario.routes.ts
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { cadExam } from "../entity/Exam";

const router = Router();
const repo = AppDataSource.getRepository(cadExam);

router.get("/", async (req, res) => {
  try {
    const exams = await repo.find();
    res.json(exams);
  } catch (error) {
    console.error("Erro ao buscar exames:", error);
    res.status(500).json({ message: "Erro interno ao buscar exames." });
  }
});

export default router;
