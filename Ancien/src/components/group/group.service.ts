import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupEntity } from '../../entity/group.entity';
import { GroupDto } from '../../dto/group.dto';


@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(GroupEntity)
        private readonly groupRepository: Repository<GroupEntity>,
    ) {}

    async findAll(): Promise<GroupEntity[]> {
        return await this.groupRepository.find();
    }

    async findById(id: string): Promise<GroupEntity> {
        try {
            return await this.groupRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }
    
    async insert(user: GroupDto): Promise<GroupEntity> {
        const newUser = new GroupEntity();

        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        try {
            return await this.groupRepository.save(newUser);
        } catch (err) {
            return err;
        }
    }
    
    async update(oldUser: GroupEntity, updated_values: GroupDto): Promise<GroupEntity> {
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
