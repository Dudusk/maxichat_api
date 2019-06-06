import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupEntity } from '../../entity/group.entity';

// DTO
import { GroupDto } from '../../dto/group.dto';


@Controller('group')
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @Get()
    findAll(): Promise<GroupEntity[]> {
        return this.groupService.findAll();
    }

    @Get(':id') 
    async findOneById(@Param() params): Promise<GroupDto> {
        return await this.groupService.findById(params.id);
    }

    @Post()
    async create(@Body() user: GroupDto): Promise<GroupDto> {
        return await this.groupService.insert(user) as GroupDto;
    }

    @Put(':id')
    async update(@Body() updatedUser: GroupDto, @Param() params): Promise<GroupDto> {
        const oldUser = await this.groupService.findById(params.id);
        return await this.groupService.update(oldUser, updatedUser);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.groupService.delete(params.id);
    }



}
