import { Module } from '@nestjs/common';
import { EmployeesApiController } from './app.controller';
import { EmployeesApiService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { SalariesModule } from './salaries/salaries.module';
import { AuthModule } from '@app/auth';

@Module({
  imports: [EmployeesModule, SalariesModule, AuthModule],
  controllers: [EmployeesApiController],
  providers: [EmployeesApiService],
})
export class EmployeesApiModule {}
