import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesApiController } from './app.controller';
import { EmployeesApiService } from './app.service';

describe('EmployeesApiController', () => {
  let employeesApiController: EmployeesApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesApiController],
      providers: [EmployeesApiService],
    }).compile();

    employeesApiController = app.get<EmployeesApiController>(EmployeesApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(employeesApiController.getHello()).toBe('Hello World!');
    });
  });
});
