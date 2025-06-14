import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CadExam } from "./Exam";

@Entity()
export class CadScheduling {
  @PrimaryGeneratedColumn()
  id!: number;

  // Relação ManyToOne para chave estrangeira
  @ManyToOne(() => CadExam, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id_exam" })
  exam!: CadExam;

  @Column()
  specialty!: string;

  @Column({ type: "timestamp" })
  date_time!: Date;

  @Column()
  informations!: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at!: Date;
}