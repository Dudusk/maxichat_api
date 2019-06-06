import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroupEntity } from '../../entity/userGroup.entity';
import { UserGroupDto } from '../../dto/userGroup.dto';


@Injectable()
export class UserGroupService {
    constructor(
        @InjectRepository(UserGroupEntity)
        private readonly userGroupRepository: Repository<UserGroupEntity>,
    ) {}

    async findAll(): Promise<UserGroupEntity[]> {
        return await this.userGroupRepository.find();
    }

    async findById(id: string): Promise<UserGroupEntity> {
        try {
            return await this.userGroupRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }
    
    async insert(user: UserGroupDto): Promise<UserGroupEntity> {
        const newUser = new UserGroupEntity();

        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        try {
            return await this.userGroupRepository.save(newUser);
        } catch (err) {
            return err;
        }
    }
    
    async update(oldUser: UserGroupEntity, updated_values: UserGroupEntity): Promise<UserGroupEntity> {
        const updatedUser = oldUser;

        Object.keys(updated_values).forEach((key) => {
            updatedUser[key] = updated_values[key];
        });

        try {
            return await this.userGroupRepository.save(updatedUser);
        } catch (err) {
            return err;
        }

    }
    
    async delete(id: string) {
        try {
            return await this.userGroupRepository.delete(id);
        } catch (err) {
            return err;
        }
    }


}
