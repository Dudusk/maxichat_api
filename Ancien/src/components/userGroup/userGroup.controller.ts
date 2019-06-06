import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
import { UserGroupService } from './userGroup.service';
import { UserGroupEntity } from '../../entity/userGroup.entity';

// DTO
import { UserGroupDto } from '../../dto/userGroup.dto';


@Controller('users')
export class UserGroupController {
    constructor(private readonly userGroupService: UserGroupService) {}

    @Get()
    findAll(): Promise<UserGroupEntity[]> {
        return this.userGroupService.findAll();
    }

    @Get(':id') 
    async findOneById(@Param() params): Promise<UserGroupDto> {
        return await this.userGroupService.findById(params.id);
    }

    @Post()
    async create(@Body() user: UserGroupDto): Promise<UserGroupDto> {
        return await this.userGroupService.insert(user) as UserGroupDto;
    }

    @Put(':id')
    async update(@Body() updatedUser: UserGroupDto, @Param() params): Promise<UserGroupDto> {
        const oldUser = await this.userGroupService.findById(params.id);
        return await this.userGroupService.update(oldUser, updatedUser);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.userGroupService.delete(params.id);
    }



}
