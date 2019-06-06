import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn,JoinColumn, ManyToOne, IsNull } from 'typeorm';

@Entity()
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  username_sender: string;

  @Column({ length: 255 })
  message: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

}