// src/routes/usuario.routes.ts
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Scheduling } from "../entity/Scheduling";

const router = Router();
const repo = AppDataSource.getRepository(Scheduling);

router.get("/", async (req, res) => {
  const schedulings = await repo.find();
  res.json(schedulings);
});

router.post("/", async (req, res) => {
  const scheduling = repo.create(req.body);
  const resultado = await repo.save(scheduling);
  res.status(201).json(resultado);
});

export default router;
