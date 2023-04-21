import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { AuthModule } from '@app/auth';

@Module({
  imports: [BooksModule, FacilitiesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
