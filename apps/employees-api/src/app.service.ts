import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesApiService {
  getHello(): string {
    return 'Hello World from Employees API!';
  }
}
