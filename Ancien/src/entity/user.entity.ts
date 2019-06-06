import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  email: string;

  @Column({ length: 150 })
  nom: string;

  @Column({ length: 150 })
  prenom: string;

  @Column({ length: 150 })
  password: string;

  @Column({ length: 150 })
  pseudo: string;

  @Column({ length: 15 })
  tag: string;

  @Column()
  avatar: string;

}