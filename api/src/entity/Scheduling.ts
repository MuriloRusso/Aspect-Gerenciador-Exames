import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { cadExam } from "./Exam";

@Entity()
export class cadScheduling {
  @PrimaryGeneratedColumn()
  id!: number;

  // Relação ManyToOne para chave estrangeira
  @ManyToOne(() => cadExam, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id_exam" })
  exam!: cadExam;

  @Column({ type: "timestamp" })
  date_time!: Date;

  @Column()
  informations!: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at!: Date;
}