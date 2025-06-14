import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exam } from "./Exam";

@Entity()
export class Scheduling {
  @PrimaryGeneratedColumn()
  id!: number;

  // Relação ManyToOne para chave estrangeira
  @ManyToOne(() => Exam, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id_exam" })
  exam!: Exam;

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