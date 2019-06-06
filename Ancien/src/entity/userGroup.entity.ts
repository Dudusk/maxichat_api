import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { GroupEntity } from './group.entity';
import { UserEntity } from './user.entity';

@Entity()
export class UserGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'group_id' })
  @ManyToOne(type =>  GroupEntity, group => group.id)
  group_id: number;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(type =>  UserEntity, user => user.id)
  user_id: number;

}