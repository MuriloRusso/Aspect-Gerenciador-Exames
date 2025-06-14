import express from "express";
import { AppDataSource } from "./data-source";
import { Usuario } from "./entity/Usuario";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log("📦 Banco de dados conectado com sucesso!");

  app.get("/usuarios", async (req, res) => {
    const usuarios = await AppDataSource.getRepository(Usuario).find();
    res.json(usuarios);
  });

  app.post("/usuarios", async (req, res) => {
    const repo = AppDataSource.getRepository(Usuario);
    const novoUsuario = repo.create(req.body);
    const resultado = await repo.save(novoUsuario);
    res.status(201).json(resultado);
  });

  app.listen(3000, () => {
    console.log("🚀 Servidor rodando em http://localhost:3000");
  });
}).catch((error) => console.error("Erro ao conectar no banco:", error));
