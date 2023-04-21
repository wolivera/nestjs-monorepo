import { NestFactory } from '@nestjs/core';
import { EmployeesApiModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(EmployeesApiModule);
  await app.listen(3000);
}
bootstrap();
