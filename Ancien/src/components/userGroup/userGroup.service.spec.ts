import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupService } from './userGroup.service';

describe('UserGroupService', () => {
  let service: UserGroupService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGroupService],
    }).compile();
    service = module.get<UserGroupService>(UserGroupService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
