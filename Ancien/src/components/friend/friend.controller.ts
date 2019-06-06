import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendEntity } from '../../entity/friend.entity';

// DTO
import { FriendDto } from '../../dto/friend.dto';


@Controller('group')
export class FriendController {
    constructor(private readonly friendService: FriendService) {}

    @Get()
    findAll(): Promise<FriendEntity[]> {
        return this.friendService.findAll();
    }

    @Get(':id') 
    async findOneById(@Param() params): Promise<FriendDto> {
        return await this.friendService.findById(params.id);
    }

    @Post()
    async create(@Body() user: FriendDto): Promise<FriendDto> {
        return await this.friendService.insert(user) as FriendDto;
    }

    @Put(':id')
    async update(@Body() updatedUser: FriendDto, @Param() params): Promise<FriendDto> {
        const oldUser = await this.friendService.findById(params.id);
        return await this.friendService.update(oldUser, updatedUser);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.friendService.delete(params.id);
    }



}
