// src/routes/usuario.routes.ts
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/Usuario";

const router = Router();
const repo = AppDataSource.getRepository(Usuario);

router.get("/", async (req, res) => {
  const usuarios = await repo.find();
  res.json(usuarios);
});

router.post("/", async (req, res) => {
  const usuario = repo.create(req.body);
  const resultado = await repo.save(usuario);
  res.status(201).json(resultado);
});

export default router;
