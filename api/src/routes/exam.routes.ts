// src/routes/usuario.routes.ts
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { cadExam } from "../entity/Exam";

const router = Router();
const repo = AppDataSource.getRepository(cadExam);

router.get("/", async (req, res) => {
  const exams = await repo.find();
  res.json(exams);
});

export default router;
