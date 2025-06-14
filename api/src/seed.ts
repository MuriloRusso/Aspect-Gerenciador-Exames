import "reflect-metadata";
import { AppDataSource } from "./data-source"; // Ajuste o caminho conforme sua estrutura
import { cadExam } from "./entity/Exam";

async function seedCadExam() {
  const repo = AppDataSource.getRepository(cadExam);

  const count = await repo.count();
  if (count > 0) {
    console.log("cadExam já está populado.");
    return;
  }

  const exams = [];
  for (let i = 1; i <= 10; i++) {
    exams.push(
      repo.create({
        name: `Exame ${i}`,
        specialty: `Especialidade ${i}`,
      })
    );
  }

  await repo.save(exams);
  console.log("10 exames criados com sucesso.");
}

AppDataSource.initialize()
  .then(() => seedCadExam())
  .catch((error) => console.error("Erro ao inicializar o DataSource:", error));
