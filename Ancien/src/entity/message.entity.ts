import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn,JoinColumn, ManyToOne, IsNull } from 'typeorm';
import { GroupEntity } from './group.entity';
import { FriendEntity } from './friend.entity';
import { UserEntity } from './user.entity';

@Entity()
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'group_id' })
  @ManyToOne(type => GroupEntity, group => group.id, { nullable: true })
  group_id: number;

  @JoinColumn({ name: 'friend_id' })
  @ManyToOne(type => FriendEntity, user => user.id, { nullable: true })
  friend_id: number;

  @JoinColumn({ name: 'sender_id' })
  @ManyToOne(type => UserEntity, user => user.id)
  sender_id: number;

  @Column({ length: 255 })
  message: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

}