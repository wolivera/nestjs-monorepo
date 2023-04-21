import { Controller, Get } from '@nestjs/common';
import { EmployeesApiService } from './app.service';

@Controller()
export class EmployeesApiController {
  constructor(private readonly employeesApiService: EmployeesApiService) {}

  @Get()
  getHello(): string {
    return this.employeesApiService.getHello();
  }
}
