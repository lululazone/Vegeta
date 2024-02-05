import { Test, TestingModule } from '@nestjs/testing';
import { ParisController } from './paris.controller';

describe('ParisController', () => {
  let controller: ParisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParisController],
    }).compile();

    controller = module.get<ParisController>(ParisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
