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

    @Get(':id') 
    async findOneById(@Param() params): Promise<MessageDto> {
        return await this.messageService.findById(params.id);
    }

    @Get('/group/:group_id') 
    async findByGroupId(@Param() params): Promise<MessageDto[]> {
        console.log('[MESSAGE]_Get-By-Group-ID:', params);
        return await this.messageService.findByGroupId(params.group_id);
    }

    @Post()
    async create(@Body() message: MessageDto): Promise<MessageDto> {
        console.log('[MESSAGE]_Post:', message);
        return await this.messageService.insert(message) as MessageDto;
    }

    @Put(':id')
    async update(@Body() updatedUser: MessageDto, @Param() params): Promise<MessageDto> {
        const oldUser = await this.messageService.findById(params.id);
        return await this.messageService.update(oldUser, updatedUser);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.messageService.delete(params.id);
    }



}
