import { Module } from '@nestjs/common';
import { UserGroupController } from './userGroup.controller';
import { UserGroupService } from './userGroup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupEntity } from '../../entity/userGroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserGroupEntity])],
  controllers: [UserGroupController],
  providers: [UserGroupService],
})
export class UserGroupModule {}
