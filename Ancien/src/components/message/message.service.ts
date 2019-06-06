import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from '../../entity/message.entity';
import { MessageDto } from '../../dto/message.dto';


@Injectable()
export class MessageService {
    constructor(
        @InjectRepository( MessageEntity)
        private readonly messageRepository: Repository<MessageEntity>,
    ) {}

    async findAll(): Promise<MessageEntity[]> {
        console.log("FindAll");
        return await this.messageRepository.find();
    }

    async findById(id: number): Promise<MessageEntity> {
        try {
            return await this.messageRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }

    async findByGroupId(group_id: number): Promise<MessageEntity[]> {
        let patch = [];

        try {
            console.log('[SERVICE][findByGroupId]-Group_id: ', group_id)
            return await this.messageRepository.find({ 
                relations: ["group_id", "sender_id"],
                select: ["id", "message", "created_at", "friend_id"], 
                //take: 10,
                where: { group_id: group_id } 
            }).then(
                (success) => { 
                    patch = [];
                    
                    for (let index = 0; index < success.length; index++) {
                        let patchSeconde = new MessageEntity;
                        patchSeconde.message = success[index].message
                        patchSeconde.created_at = success[index].created_at
                        patchSeconde.group_id = success[index].group_id['id']
                        patchSeconde.sender_id = success[index].sender_id['id']
                        patch[index] = patchSeconde;
                    }
                    console.log('patch: ', patch ) ;
                    return patch;
                },
                (error) => { 
                    console.error(error);
                    return error;
                }
            )
        } catch (err) {
            return err;
        }
    }
    
    async insert(message: MessageDto): Promise<MessageEntity> {
        const newMessage = new MessageDto();

        Object.keys(message).forEach((key) => {
            newMessage[key] = message[key];
        });

        try {
            return await this.messageRepository.save(newMessage);
        } catch (err) {
            return err;
        }
    }
    
    async update(oldUser: MessageEntity, updated_values: MessageDto): Promise<MessageEntity> {
        const updatedUser = oldUser;

        Object.keys(updated_values).forEach((key) => {
            updatedUser[key] = updated_values[key];
        });

        try {
            return await this.messageRepository.save(updatedUser);
        } catch (err) {
            return err;
        }

    }
    
    async delete(id: string) {
        try {
            return await this.messageRepository.delete(id);
        } catch (err) {
            return err;
        }
    }


}
