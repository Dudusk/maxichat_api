import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class FriendEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @JoinColumn({ name: 'user_id_1' })
    @ManyToOne(type => UserEntity, user => user.id)
    id_user_1: number;
  
    @JoinColumn({ name: 'user_id_2' })
    @ManyToOne(type => UserEntity, user => user.id)
    id_user_2: number;
  
    @Column({ 
      type: "enum",
      enum: [
        "waiting",
        "accepted",
      ],
      default: 'waiting'
    })
    status: 'waiting' | 'accepted';

}