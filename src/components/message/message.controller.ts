import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageEntity } from '../../entity/message.entity';

// DTO
import { MessageDto } from '../../dto/message.dto';


@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get()
    findAll(): Promise<MessageEntity[]> {
        return this.messageService.findAll();
    }

    @Post('/genere-all') 
    async generate(): Promise<MessageDto> {
        return await this.messageService.genereAll();
    }

    @Post()
    async create(@Body() message: MessageDto): Promise<MessageDto> {
        console.log('[MESSAGE]_Post:', message);
        return await this.messageService.insert(message) as MessageDto;
    }

}
