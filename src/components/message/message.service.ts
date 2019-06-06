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

    async genereAll(): Promise<MessageEntity> {
        const newMessage = new MessageDto();

        let message = new MessageDto();
        message.message = "Message généré";
        message.username_sender = "Roberto";
        message.created_at = new Date();

        Object.keys(message).forEach((key) => {
            newMessage[key] = message[key];
        });

        try {
            return await this.messageRepository.save(newMessage);
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
    
   


}
