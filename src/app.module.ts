import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
    `mongodb+srv://${process.env.USER_KEY}@cluster0.aic4b.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`), 
    TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
