import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entity/user.entity';
import { UserDto } from '../../dto/user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findById(id: string): Promise<UserEntity> {
        try {
            return await this.userRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }
    
    async insert(user: UserDto): Promise< UserEntity> {
        const newUser = new  UserEntity();

        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        try {
            return await this.userRepository.save(newUser);
        } catch (err) {
            return err;
        }
    }
    
    async update(oldUser:  UserEntity, updated_values: UserDto): Promise< UserEntity> {
        const updatedUser = oldUser;

        Object.keys(updated_values).forEach((key) => {
            updatedUser[key] = updated_values[key];
        });

        try {
            return await this.userRepository.save(updatedUser);
        } catch (err) {
            return err;
        }
    }
    
    async delete(id: string) {
        try {
            return await this.userRepository.delete(id);
        } catch (err) {
            return err;
        }
    }

}
