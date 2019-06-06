import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FriendEntity } from '../../entity/friend.entity';
import { FriendDto } from '../../dto/friend.dto';


@Injectable()
export class FriendService {
    constructor(
        @InjectRepository(FriendEntity)
        private readonly groupRepository: Repository<FriendEntity>,
    ) {}

    async findAll(): Promise<FriendEntity[]> {
        return await this.groupRepository.find();
    }

    async findById(id: string): Promise<FriendEntity> {
        try {
            return await this.groupRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }
    
    async insert(user: FriendDto): Promise<FriendEntity> {
        const newUser = new FriendEntity();

        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        try {
            return await this.groupRepository.save(newUser);
        } catch (err) {
            return err;
        }
    }
    
    async update(oldUser: FriendEntity, updated_values: FriendDto): Promise<FriendEntity> {
        const updatedUser = oldUser;

        Object.keys(updated_values).forEach((key) => {
            updatedUser[key] = updated_values[key];
        });

        try {
            return await this.groupRepository.save(updatedUser);
        } catch (err) {
            return err;
        }
    }
    
    async delete(id: string) {
        try {
            return await this.groupRepository.delete(id);
        } catch (err) {
            return err;
        }
    }

}
