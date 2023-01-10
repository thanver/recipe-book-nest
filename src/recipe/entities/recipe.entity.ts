import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: true })
  preparationTime: number;

  @Column({ nullable: false })
  ingredients: string;

  @Column({ unique: true, nullable: false })
  method: string;
}