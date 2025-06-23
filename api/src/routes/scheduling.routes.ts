// src/routes/scheduling.routes.ts (ou o nome da sua rota de agendamento)
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { cadScheduling } from "../entity/Scheduling";

const router = Router();
const repo = AppDataSource.getRepository(cadScheduling);

router.get("/", async (req, res) => {
  try {
    const schedulings = await repo.find({
      relations: ['exam'], // <-- Isso carrega os dados do exame relacionado
    });    
    res.json(schedulings);
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    res.status(500).json({ message: "Erro ao buscar agendamentos." });
  }
});

export default router;
