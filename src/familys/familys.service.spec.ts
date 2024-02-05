import { Test, TestingModule } from '@nestjs/testing';
import { FamilysService } from './familys.service';

describe('FamilysService', () => {
  let service: FamilysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilysService],
    }).compile();

    service = module.get<FamilysService>(FamilysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
