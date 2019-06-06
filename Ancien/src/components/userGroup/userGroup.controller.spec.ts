import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupController } from './userGroup.controller';

describe('UserGroup Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UserGroupController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UserGroupController = module.get<UserGroupController>(UserGroupController);
    expect(controller).toBeDefined();
  });
});
