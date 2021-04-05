import { Test, TestingModule } from '@nestjs/testing';
import { TaskServise } from './task.servise';

describe('TaskServise', () => {
  let provider: TaskServise;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskServise],
    }).compile();

    provider = module.get<TaskServise>(TaskServise);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
