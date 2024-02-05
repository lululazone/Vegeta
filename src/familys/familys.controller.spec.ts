import { Test, TestingModule } from '@nestjs/testing';
import { FamilysController } from './familys.controller';

describe('FamilysController', () => {
  let controller: FamilysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamilysController],
    }).compile();

    controller = module.get<FamilysController>(FamilysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
